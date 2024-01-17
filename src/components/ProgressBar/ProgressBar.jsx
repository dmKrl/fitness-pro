import * as S from './ProgressBar.style';

export default function ProgressBarFirst({ percent }) {
    const getColor = () => {
        if (percent < 30) {
            return 'rgba(255, 109, 0, 1)';
        }
        if (percent < 60) {
            return 'rgba(154, 72, 241, 1)';
        }
        return 'rgba(86, 94, 239, 1)';
    };
    return (
        <S.ProgressBarFirst>
            <S.CompletedProgressFirst
                style={{ width: `${percent}%`, background: getColor(percent) }}
            >
                <S.Percent>{percent}%</S.Percent>
            </S.CompletedProgressFirst>
        </S.ProgressBarFirst>
    );
}
