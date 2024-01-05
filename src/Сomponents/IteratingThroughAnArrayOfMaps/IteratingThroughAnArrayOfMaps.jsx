import AuxiliaryArray from '../AuxiliaryArray';
import * as S from './IteratingThroughAnArrayOfMaps.styled';

function IteratingThroughAnArrayOfMaps() {
    return (
        <S.Cards className="cards">
            {AuxiliaryArray.map((card) => (
                <div key={card.id}>
                    <a href="#">
                        <S.ImgCard src={card.image} alt="Карта курса" />
                    </a>
                </div>
            ))}
        </S.Cards>
    );
}

export default IteratingThroughAnArrayOfMaps;
