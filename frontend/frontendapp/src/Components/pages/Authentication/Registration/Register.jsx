import { useState } from "react";
import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'; 
import ProductTile from "../../../ProductTile";

const Register = ({ showLogin }) => {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!password || !email || (!showLogin && !name)) {
            setError('All fields are required');
            return;
        }

        try {
            const endpoint = `http://localhost:8080/user/${showLogin ? 'login' : 'register'}`;
            console.log(endpoint)
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password, name, email }),
            });

            const result = await response.json();

            if (response.ok) {
                if (showLogin) {
                    setSuccess('Login successful!');
                    Navigate('/home')
  
                } else {
                    setSuccess('Registration successful!');
                    Navigate('/home')
                }
                setPassword('');
                setName('');
                setEmail('');
                setError('');
            } else {
                setError(result.message || 'An error occurred');
                setSuccess('');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
            setSuccess('');
        }
    };

    return (
        <div className="register-container">
            <h2>{showLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                {!showLogin && (
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{showLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
};

export default Register;
