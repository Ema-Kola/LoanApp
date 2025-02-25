import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';

function SignupPage() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!name || !email || !password || !confirmPassword || !surname) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/auth/signup', { name, email, password}, {params: {surname}});
            const { jwt, role, message } = response.data;
            if (response.data.status) {
                localStorage.setItem('token', jwt);
                localStorage.setItem('user', JSON.stringify({ name, role }));
             
                    const now = new Date().toLocaleString();
                    localStorage.setItem('lastLogin', now);
             
            
                // Navigate based on role
                if (role === 'CLIENT') {
                    navigate('/dashboardClient');
                } else if (role === 'BANKER') {
                    navigate('/dashboardBanker');
                } else {
                    navigate('/');
                }
            } else {
                setError(message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            console.error('Signup failed:', err);
            setError(err.response?.data?.message || 'An unexpected error occurred.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '500px' }}>
                <MDBContainer>
                    <h2 className="mb-4 text-center">Sign Up</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <MDBInput
                        wrapperClass="mb-3"
                        placeholder="First Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                     <MDBInput
                        wrapperClass="mb-3"
                        placeholder="Surname"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <MDBInput
                        wrapperClass="mb-3"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                        wrapperClass="mb-3"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <MDBInput
                        wrapperClass="mb-3"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                    <p className="text-center mt-3">
                        Already registered? <a href="/">Login</a>
                    </p>
                </MDBContainer>
            </div>
        </div>
    );
}

export default SignupPage;

