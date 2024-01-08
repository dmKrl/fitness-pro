import BannerCourse from '../../components/BannerCourse/BannerCourse';
import Logo from '../../components/UI/Logo/Logo';
import Fitting from '../../components/Fitting/Fitting';
import Directions from '../../components/Directions/Directions';
import BannerConnection from '../../components/BannerConnection/BannerConnection';
import * as S from './DescriptionCourse.style';

function DescriptionCourse() {
    return (
        <S.ContainerDescription>
            <Logo />
            <BannerCourse />
            <Fitting />
            <Directions />
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
