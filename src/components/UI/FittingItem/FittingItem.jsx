import * as S from '../../Fitting/Fitting.style';

function FittingItem(props) {
    const { num, fit } = props;
    return (
        <S.BlockFittingItem>
            <img src={num} alt="" />
            <span>{fit}</span>
        </S.BlockFittingItem>
    );
}

export default FittingItem;
