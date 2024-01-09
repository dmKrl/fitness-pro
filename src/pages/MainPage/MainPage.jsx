import TopNavLogo from '../../components/TopNavLogo/TopNavLogo';
import InformationAboutTraining from '../../components/InformationAboutTraining/InformationAboutTraining';
import SectionWithTheMainTitleAndSticker from '../../components/SectionWithTheMainTitleAndStickers/SectionWithTheMainTitleAndStickers';
import IteratingThroughAnArrayOfMaps from '../../components/IteratingThroughAnArrayOfMaps/IteratingThroughAnArrayOfMaps';
import ItemForAnchor from '../../components/ItemForAnchor/ItemForAnchor';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
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
