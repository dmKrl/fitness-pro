import { useSelector } from 'react-redux';
import ButtonForTransition from '../UI/ButtonForTransition/ButtonForTransition';
import * as S from './ItemMyCourses.styled';
import { selectDataCourses } from '../../redux/slices/dataSlices';

function ItemMyCourse() {
    const dataCourses = useSelector(selectDataCourses);
    return (
        <>
            <S.CardCourseHeader>Мои курсы</S.CardCourseHeader>
            <S.CardCourseBox>
                {dataCourses?.myCourses?.map((card) => (
                    <S.CardCourse key={card.id}>
                        <S.ImgCardCourse src={card.image} alt="Карта курса" />
                        <S.CourseButtonBox>
                            <ButtonForTransition id={card.id}>
                                Перейти →
                            </ButtonForTransition>
                        </S.CourseButtonBox>
                    </S.CardCourse>
                ))}
            </S.CardCourseBox>
        </>
    );
}

export default ItemMyCourse;
