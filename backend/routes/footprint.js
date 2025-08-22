const express = require('express');
const router = express.Router();
const Footprint = require('../models/footprint');

router.post('/save', async (req, res) => {
  try {
    const { userId, transport, electricity, water, plastic, totalFootprint } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const newEntry = new Footprint({
      userId,
      transport,
      electricity,
      water,
      plastic,
      totalFootprint
    });

    await newEntry.save();
    res.json({ message: "Footprint saved successfully!" });
  } catch (err) {
    console.error("Error saving footprint:", err);
    res.status(500).json({ message: "Server error" });
  }
});
// GET /footprint/summary?userId=...
router.get('/summary', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: 'User ID required' });

    const last7 = await Footprint.find({ userId })
      .sort({ date: -1 })
      .limit(7);

    if (last7.length === 0) return res.json({ avg: 0, best: 0 });

    const total = last7.reduce((sum, item) => sum + item.totalFootprint, 0);
    const avg = (total / last7.length).toFixed(2);
    const best = Math.min(...last7.map(item => item.totalFootprint));

    res.json({ avg, best });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
