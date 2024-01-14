import DirectionItem from '../UI/DirectionItem/DirectionItem';
import * as S from './Directions.style';

function Directions({ chosenCourse }) {
    return (
        <S.DirectionsContainer>
            <S.TittleDirections>Направления:</S.TittleDirections>
            <S.DirectionList>
                {chosenCourse?.directions?.map((direction, index) => (
                    <li key={index}>
                        <DirectionItem text={direction} key={index} />
                    </li>
                ))}
            </S.DirectionList>
        </S.DirectionsContainer>
    );
}

export default Directions;
