import TopNavLogo from '../Сomponents/TopNavLogo/TopNavLogo';
import InformationAboutTraining from '../Сomponents/InformationAboutTraining/InformationAboutTraining';
import SectionWithTheMainTitleAndSticker from '../Сomponents/SectionWithTheMainTitleAndStickers/SectionWithTheMainTitleAndStickers';
import IteratingThroughAnArrayOfMaps from '../Сomponents/IteratingThroughAnArrayOfMaps/IteratingThroughAnArrayOfMaps';
import ItemForAnchor from '../Сomponents/ItemForAnchor/ItemForAnchor';
import ButtonLogin from '../Сomponents/ButtonLogin/ButtonLogin';
import * as S from './MainPage.styled';

function MainPage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Main>
                    <S.Navigation id="top">
                        <TopNavLogo />
                        <ButtonLogin />
                    </S.Navigation>
                    <InformationAboutTraining />
                    <SectionWithTheMainTitleAndSticker />
                    <IteratingThroughAnArrayOfMaps />
                    <ItemForAnchor />
                </S.Main>
            </S.Container>
        </S.Wrapper>
    );
}

export default MainPage;
