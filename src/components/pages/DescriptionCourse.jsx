import BannerCourse from '../BannerCourse/BannerCourse';
import Logo from '../UI/Logo/Logo';
import data from '../../data.json';
import Fitting from '../Fitting/Fitting';
import Directions from '../Directions/Directions';
import BannerConnection from '../BannerConnection/BannerConnection';

function DescriptionCourse() {
    return (
        <div>
            <Logo />
            <BannerCourse />
            <Fitting />
            <Directions />
            <p>{data.courses.ab1c3f.description}</p>
            <BannerConnection />
        </div>
    );
}

export default DescriptionCourse;
