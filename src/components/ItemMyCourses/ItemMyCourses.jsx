import { useNavigate } from 'react-router-dom';
import MyCourses from '../../dataArrays/MyCourses';
import ButtonForTransition from '../UI/ButtonForTransition/ButtonForTransition';
import * as S from './ItemMyCourses.styled';

function ItemMyCourse() {
    const navigate = useNavigate();
    function navigateFn() {
        navigate('/training');
    }
    return (
        <>
            <S.CardCourseHeader>Мои курсы</S.CardCourseHeader>
            <S.CardCourseBox>
                {MyCourses.map((card) => (
                    <S.CardCourse key={card.id} onClick={navigateFn}>
                        <S.ImgCardCourse src={card.image} alt="Карта курса" />
                        <S.CourseButtonBox>
                            <ButtonForTransition>Перейти →</ButtonForTransition>
                        </S.CourseButtonBox>
                    </S.CardCourse>
                ))}
            </S.CardCourseBox>
        </>
    );
}

export default ItemMyCourse;
