import { Link } from 'react-router-dom';
import AuxiliaryArray from '../../dataArrays/AuxiliaryArray';
import * as S from './IteratingThroughAnArrayOfMaps.styled';

function IteratingThroughAnArrayOfMaps() {
    return (
        <S.Cards className="cards">
            {AuxiliaryArray.map((card) => (
                <div key={card.id}>
                    <Link to="/">
                        <S.ImgCard src={card.image} alt="Карта курса" />
                    </Link>
                </div>
            ))}
        </S.Cards>
    );
}

export default IteratingThroughAnArrayOfMaps;
