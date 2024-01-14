import * as S from './AcceptProgress.styled';

export default function AcceptProgress() {
    return (
        <S.AcceptBox>
            <S.TextBox>
                <S.TextCounted>Ваш прогресс засчитан!</S.TextCounted>
            </S.TextBox>
            <div>
                <img src="../image/icon/Hand.svg" alt="" />
            </div>
        </S.AcceptBox>
    );
}
