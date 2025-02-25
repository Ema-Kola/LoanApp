import React from 'react';

function Footer() {
    const lastLogin = localStorage.getItem('lastLogin') || 'Unknown';

    return (
        <footer className="text-center p-3 border-top mt-auto">
            <p>Last login: {lastLogin}</p>
        </footer>
    );
}

export default Footer;
