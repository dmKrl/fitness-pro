import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './IteratingThroughAnArrayOfMaps.styled';
import AuxiliaryArray from '../../dataArrays/AuxiliaryArray';
import { selectDataCourses } from '../../redux/slices/dataSlices';

function IteratingThroughAnArrayOfMaps() {
    const dataCourses = useSelector(selectDataCourses);

    return (
        <>
            {dataCourses?.length === 0 ? (
                <S.CardsSkeleton>
                    {AuxiliaryArray.map((card) => (
                        <div key={card.id}>
                            <S.ItemCardSkeleton
                                src={card.image}
                                alt="Карта курса"
                            />
                        </div>
                    ))}
                </S.CardsSkeleton>
            ) : (
                <S.Cards>
                    {dataCourses?.cards?.paths?.map((card) => (
                        <div key={card.id}>
                            <Link to={`/description-course/${card.id}`}>
                                <S.ImgCard src={card.image} alt="Карта курса" />
                            </Link>
                        </div>
                    ))}
                </S.Cards>
            )}
        </>
    );
}

export default IteratingThroughAnArrayOfMaps;
