import * as S from '../../Fitting/Fitting.style';

function FittingItem({ fit }) {
    console.log(fit);
    return (
        <S.BlockFittingItem>
            <S.FittingItemText>{fit.text}.</S.FittingItemText>
            <img src={fit.number} alt="" />
        </S.BlockFittingItem>
    );
}

export default FittingItem;
