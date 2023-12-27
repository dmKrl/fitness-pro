import { Route, Routes } from 'react-router-dom';
import DescriptionCourse from './components/pages/DescriptionCourse';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element />
            <Route path="/" element />
            <Route path="/descriptionCourse" element={<DescriptionCourse />} />
            <Route path="/" element />
            <Route path="/" element />
        </Routes>
    );
}

export default AppRoutes;
