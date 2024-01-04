import { Route, Routes } from 'react-router-dom';
import Training from './pages/training/training';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/training" element={<Training />} />
        </Routes>
    );
};

export default AppRoutes;