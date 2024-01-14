import * as S from './TopNavLogo.styled';

function TopNavLogo() {
    return (
        <S.LogoItemLink href="#">
            <S.ImgLogo src="../image/svg/logoMain.svg" alt="Логотип" />
        </S.LogoItemLink>
    );
}

export default TopNavLogo;
