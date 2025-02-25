import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(() => {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        return user.name || 'User';
    });

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = JSON.parse(localStorage.getItem('user')) || {};
            setUsername(updatedUser.name || 'User');
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h3>Hello, {username}!</h3>
            <nav>
                <a href="/dashboardClient" className="me-3">Dashboard</a>
                <a href="/loanApplications" className="me-3">My Loan Applications</a>
                <a href="/editData" className="me-3">My Profile</a>
            </nav>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </header>
    );
}

export default Header;
