import * as S from './UserLogo.style';

export default function UserLogo() {
    return (
        <S.Profile>
            <img src="../image/icon/Ellipse 376.svg" alt="" />
            <S.Name>Сергей</S.Name>
            <S.SpanArrow>
                <img src="../image/icon/Arrow.svg" alt="" />
            </S.SpanArrow>
        </S.Profile>
    );
}
