import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/auth/signin', { email, password });
            const { jwt, role, name, message } = response.data;

            if (response.data.status) {
                // Store JWT and user details in localStorage
                localStorage.setItem('token', jwt);
                localStorage.setItem('user', JSON.stringify({ name, role }));
             
                    const now = new Date().toLocaleString();
                    localStorage.setItem('lastLogin', now);
             
            

                // Navigate based on role
                if(response.data.role === 'CLIENT'){
                    navigate('/dashboardClient');
                }else if( response.data.role === 'BANKER'){
                    navigate('/dashboardBanker');
                }else{
                    navigate('/');
                }
            } else {
                setError(message || 'Invalid credentials.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '500px' }}>
                <h2 className="mb-4 text-center">Login</h2>
                {error && <p className="text-danger">{error}</p>}
                <MDBInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <MDBInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary w-100 mt-4" onClick={handleLogin}>Sign In</button>
                <p className="mt-3 text-center">
                    Not a member? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}
 export default LoginPage;

