import React, { useState } from 'react';
import '../styles/AuthForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/signup';
    const data = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await axios.post(endpoint, data);

      alert(res.data.message || 'Success!');

      if (isLogin) {
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("userid", res.data.userId);
        localStorage.setItem("email",res.data.email);

        navigate('/dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className='last'>
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
    </div>
  );
}
