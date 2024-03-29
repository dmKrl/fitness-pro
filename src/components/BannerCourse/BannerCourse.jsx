import * as S from './BannerCourse.style';

function BannerCourse({ chosenCard }) {
    return (
        <S.BlockBannerCourse $imageLarge={chosenCard?.imageLarge}>
            <S.BannerTitle>{chosenCard?.textCard}</S.BannerTitle>
        </S.BlockBannerCourse>
    );
}

export default BannerCourse;
