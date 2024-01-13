import { useSelector } from 'react-redux';
import FittingItem from '../UI/FittingItem/FittingItem';
import * as S from './Fitting.style';
import { selectDataCourses } from '../../redux/slices/dataSlices';

function Fitting() {
    const dataAllCourses = useSelector(selectDataCourses);

    return (
        <S.BlockFitting>
            <S.TittleFitting>Подойдёт для вас, если:</S.TittleFitting>
            <S.BlockFittingItems>
                {dataAllCourses?.dataCourses?.courses?.ab1c3f?.fitting?.map(
                    (fit, index) => {
                        return <FittingItem fit={fit} key={index} />;
                    },
                )}
            </S.BlockFittingItems>
        </S.BlockFitting>
    );
}

export default Fitting;
