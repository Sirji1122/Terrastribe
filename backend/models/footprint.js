const mongoose = require('mongoose');

const footprintSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transport: Number,
  electricity: Number,
  water: Number,
  plastic: Number,
  totalFootprint: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Footprint', footprintSchema);
