import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/auth' }) => {
    console.log(localStorage.getItem('user'));
    if (!localStorage.getItem('user')) {
        return <Navigate to={redirectPath} replace />;
    } else {
        return <Outlet />;
    }
};
