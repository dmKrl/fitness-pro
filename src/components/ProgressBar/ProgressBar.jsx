import * as S from './ProgressBar.style';

export function ProgressBarFirst({ percent }) {
    return (
        <S.ProgressBarFirst>
            <S.CompletedProgressFirst style={{ width: `${percent}%` }}>
                <S.Percent>{percent}%</S.Percent>
            </S.CompletedProgressFirst>
        </S.ProgressBarFirst>
    );
}

export function ProgressBarSecond({ percent }) {
    return (
        <S.ProgressBarSecond>
            <S.CompletedProgressSecond style={{ width: `${percent}%` }}>
                <S.Percent>{percent}%</S.Percent>
            </S.CompletedProgressSecond>
        </S.ProgressBarSecond>
    );
}

export function ProgressBarThird({ percent }) {
    return (
        <S.ProgressBarThird>
            <S.CompletedProgressThird style={{ width: `${percent}%` }}>
                <S.Percent>{percent}%</S.Percent>
            </S.CompletedProgressThird>
        </S.ProgressBarThird>
    );
}
