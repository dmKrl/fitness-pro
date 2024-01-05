import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/" element />
        </Routes>
    );
}

export default AppRoutes;
