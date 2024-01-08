import SectionWithTheMainTitleAndStickersStyled from './SectionWithTheMainTitleAndStickers.styled';
import ImgSaleSticker from './ImgSaleSticker/ImgSaleSticker';
import MainTitle from './MainTitle/MainTitle';

function SectionWithTheMainTitleAndStickers() {
    return (
        <SectionWithTheMainTitleAndStickersStyled>
            <MainTitle />
            <ImgSaleSticker />
        </SectionWithTheMainTitleAndStickersStyled>
    );
}

export default SectionWithTheMainTitleAndStickers;
