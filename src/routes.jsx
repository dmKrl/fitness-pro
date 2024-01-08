import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DescriptionCourse from './pages/DescriptionCourse/DescriptionCourse';
import Training from './pages/Training/Training';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/training" element={<Training />} />
            <Route path="/description-course" element={<DescriptionCourse />} />
        </Routes>
    );
}

export default AppRoutes;
