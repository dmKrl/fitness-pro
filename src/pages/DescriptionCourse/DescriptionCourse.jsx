import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BannerCourse from '../../components/BannerCourse/BannerCourse';
import Fitting from '../../components/Fitting/Fitting';
import Directions from '../../components/Directions/Directions';
import BannerConnection from '../../components/BannerConnection/BannerConnection';
import * as S from './DescriptionCourse.style';
import { selectDataCourses } from '../../redux/slices/dataSlices';
import Logo from '../../components/UI/Logo/Logo';

function DescriptionCourse() {
    const dataAllCourses = useSelector(selectDataCourses);
    const params = useParams();

    const chosenCourse = dataAllCourses?.courses?.find(
        (course) => course.id === params.id,
    );
    const chosenCard = dataAllCourses?.cards?.paths?.find(
        (card) => card.id === Number(params.id),
    );

    return (
        <S.ContainerDescription>
            <Logo />
            <BannerCourse chosenCard={chosenCard} />
            <Fitting chosenCourse={chosenCourse} />
            <Directions chosenCourse={chosenCourse} />
            <S.TextDescriptionCourse>
                Благодаря комплексному воздействию упражнений происходит
                проработка всех групп мышц, тренировка суставов, улучшается
                циркуляция крови. Кроме того, упражнения дарят отличное
                настроение, заряжают бодростью и помогают противостоять
                стрессам.
            </S.TextDescriptionCourse>
            <BannerConnection />
        </S.ContainerDescription>
    );
}

export default DescriptionCourse;
