import DirectionItem from '../UI/DirectionItem/DirectionItem';
import data from '../../data.json';
import * as S from './Directions.style';

function Directions() {
    return (
        <S.DirectionsContainer>
            <S.TittleDirections>Направления:</S.TittleDirections>
            <S.DirectionList>
                {data.courses.ab1c3f.directions.map((direction) => (
                    <li>
                        <DirectionItem text={direction} />
                    </li>
                ))}
            </S.DirectionList>
        </S.DirectionsContainer>
    );
}

export default Directions;
