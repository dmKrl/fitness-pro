import FittingItem from '../UI/FittingItem/FittingItem';
import data from '../../data.json';
import * as S from './Fitting.style';

function Fitting() {
    return (
        <S.BlockFitting>
            <S.TittleFitting>Подойдёт для вас, если:</S.TittleFitting>
            <S.BlockFittingItems>
                {data.courses.ab1c3f.fitting.map((fit) => {
                    return <FittingItem fit={fit} />;
                })}
            </S.BlockFittingItems>
        </S.BlockFitting>
    );
}

export default Fitting;
