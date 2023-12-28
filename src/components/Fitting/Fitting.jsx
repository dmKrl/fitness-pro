import FittingItem from '../UI/FittingItem/FittingItem';
import data from '../../data.json';
import * as S from './Fitting.style';

function Fitting() {
    return (
        <S.BlockFitting>
            <h2>Подойдёт для вас, если:</h2>
            <S.BlockFittingItems>
                {data.courses.ab1c3f.fitting.map((fit) => {
                    return <FittingItem fit={fit} />;
                })}
            </S.BlockFittingItems>
        </S.BlockFitting>
    );
}

export default Fitting;
