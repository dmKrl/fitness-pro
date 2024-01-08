import * as S from './SectionWithTheMainTitleAndStickers.styled';
import ImgSaleSticker from '../SectionWithTheMainTitleAndStickers/ImgSaleSticker/ImgSaleSticker';
import MainTitle from '../SectionWithTheMainTitleAndStickers/MainTitle/MainTitle';

function SectionWithTheMainTitleAndStickers() {
    return (
        <S.SectionWithTheMainTitleAndStickers>
            <MainTitle />
            <ImgSaleSticker />
        </S.SectionWithTheMainTitleAndStickers>
    );
}

export default SectionWithTheMainTitleAndStickers;
