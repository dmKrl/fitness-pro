import FittingItem from '../UI/FittingItem/FittingItem';
import * as S from './Fitting.style';

function Fitting({ chosenCourse }) {
    return (
        <S.BlockFitting>
            <S.TittleFitting>Подойдёт для вас, если:</S.TittleFitting>
            <S.BlockFittingItems>
                {chosenCourse?.fitting?.map((fit, index) => {
                    return <FittingItem fit={fit} key={index} />;
                })}
            </S.BlockFittingItems>
        </S.BlockFitting>
    );
}

export default Fitting;
