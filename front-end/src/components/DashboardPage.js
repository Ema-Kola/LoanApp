import React from 'react';
import HeaderBanker from './HeaderBanker';
import Footer from './Footer';

function DashboardBanker() {
    

    return (
        <div className="d-flex flex-column vh-100">
            <HeaderBanker />
            <main className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="border rounded-lg p-4" style={{ width: '500px', height: '400px' }}>
                    <h2 className="mb-4 text-center">Welcome to Banker Dashboard</h2>
                    <p className="text-center">You are logged in successfully.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DashboardBanker;

