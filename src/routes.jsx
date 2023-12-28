import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage/AuthPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/" element />
        </Routes>
    );
}

export default AppRoutes;
