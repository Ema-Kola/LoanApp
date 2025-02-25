import React from 'react';

function Footer() {
    const lastLogin = localStorage.getItem('lastLogin') || 'Unknown';

    return (
        <footer className="text-center p-3 border-top mt-auto">
        {/* // <footer className="footer fixed-bottom text-center p-3 border-top" >
        // <footer className="footer p-3 border-top"> 
        // <footer className="footer p-3 border-top"> 
        // <footer className="footer fixed-bottom text-center p-3 border-top" style={{ backgroundColor: '#fff' }}> */}
            <p>Last login: {lastLogin}</p>
        </footer>
    );
}

export default Footer;
