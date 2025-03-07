import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');


    if (!token) {
        return <Navigate to="/" replace />;
    }

    try {
        // Decode token and check expiration
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; 

        if (decoded.exp < currentTime) {
            localStorage.removeItem('token'); 
            return <Navigate to="/" replace />;
        }
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.role || (allowedRoles && !allowedRoles.includes(user.role))) {
            return <Navigate to="/" replace />;
        }
        
    } catch (err) {
        console.error('Error decoding token:', err);
        localStorage.removeItem('token');
        return <Navigate to="/" replace />;
    }

    return children;
};



export default ProtectedRoute;
