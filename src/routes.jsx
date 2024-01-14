import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DescriptionCourse from './pages/DescriptionCourse/DescriptionCourse';
import Training from './pages/Training/Training';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<MainPage />} />
            <Route
                path="/description-course/:id"
                element={<DescriptionCourse />}
            />
            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/training" element={<Training />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
