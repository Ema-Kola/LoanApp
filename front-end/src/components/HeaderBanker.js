import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderBanker() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const username = user.name || 'User';

    return (
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h3>Hello, {username}!</h3>
            <nav>
                <a href="/dashboardBanker" className="me-3">Dashboard</a>
                <a href="/applications" className="me-3">Loan Applications</a>
                <a href="/loanStats" className="me-3">Loan Stats</a>
        
            </nav>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </header>
    );
}

export default HeaderBanker;
