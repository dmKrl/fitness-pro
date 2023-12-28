import BannerCourse from '../BannerCourse/BannerCourse';
import Logo from '../UI/Logo/Logo';
import data from '../../data.json';
import Fitting from '../Fitting/Fitting';
import Directions from '../Directions/Directions';
import BannerConnection from '../BannerConnection/BannerConnection';
import * as S from './DescriptionCourse.style';

function DescriptionCourse() {
    return (
        <S.ContainerDecription>
            <Logo />
            <BannerCourse />
            <Fitting />
            <Directions />
            <p>{data.courses.ab1c3f.description}</p>
            <BannerConnection />
        </S.ContainerDecription>
    );
}

export default DescriptionCourse;
