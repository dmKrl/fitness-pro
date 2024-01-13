import { useSelector } from 'react-redux';
import DirectionItem from '../UI/DirectionItem/DirectionItem';
import * as S from './Directions.style';
import { selectDataCourses } from '../../redux/slices/dataSlices';

function Directions() {
    const dataAllCourses = useSelector(selectDataCourses);

    return (
        <S.DirectionsContainer>
            <S.TittleDirections>Направления:</S.TittleDirections>
            <S.DirectionList>
                {dataAllCourses?.dataCourses?.courses?.ab1c3f?.directions?.map(
                    (direction, index) => (
                        <li key={index}>
                            <DirectionItem text={direction} key={index} />
                        </li>
                    ),
                )}
            </S.DirectionList>
        </S.DirectionsContainer>
    );
}

export default Directions;
