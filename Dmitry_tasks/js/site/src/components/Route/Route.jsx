import React from 'react';
import { Navigate } from 'react-router-dom';
import PacmanLoader from 'react-spinners/PacmanLoader';
import useAuth from '../Hooks/useAuth';

function CustomRoute({ route, children }) {
    const [user, loading] = useAuth();
    if (loading) {
        return <PacmanLoader color="#36d7b7" />;
    }
    if (route === 'public') {
        if (Object.keys(user).length > 0) {
            return <Navigate to="/AllProducts" replace />;
        }
        return children;
    }
    if (route === 'protected') {
        if (Object.keys(user).length === 0) {
            return <Navigate to="/login" replace />;
        }
        return children;
    }
    if (route === 'admin') {
        if (Object.keys(user).length > 0) {
            if (user.role === 'Admin') {
                return children;
            } if (user.role === 'Client') {
                return <Navigate to="/AllProducts" replace />;
            }
        }
    }
}
export default CustomRoute;
