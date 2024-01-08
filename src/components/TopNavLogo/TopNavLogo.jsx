import * as S from './TopNavLogo.styled';

function TopNavLogo() {
    return (
        <S.LogoItemLink href="#">
            <S.ImgLogo src="../images/svg/Logo.svg" alt="Логотип" />
            <S.ItemH2>SkyFitnessPro</S.ItemH2>
        </S.LogoItemLink>
    );
}

export default TopNavLogo;
