import * as S from './MyProgress.style';

export default function MyResults() {
    return (
        <S.ConteinerResults>
            <S.MyResultsText>Мой прогресс</S.MyResultsText>
            <S.QuestionBox>
                <S.QuestionItems>
                    <S.QuestionResults>
                        Сколько раз вы сделали наклоны вперед?
                    </S.QuestionResults>
                    <S.AnswerResults
                        type="text"
                        placeholder="Введите значение"
                    />
                    <S.CreateLine />
                </S.QuestionItems>
                <S.QuestionItems>
                    <S.QuestionResults>
                        Сколько раз вы сделали наклоны назад?
                    </S.QuestionResults>
                    <S.AnswerResults
                        type="text"
                        placeholder="Введите значение"
                    />
                    <S.CreateLine />
                </S.QuestionItems>
                <S.QuestionItems>
                    <S.QuestionResults>
                        Сколько раз вы сделали поднятие ног, согнутых в коленях?
                    </S.QuestionResults>
                    <S.AnswerResults
                        type="text"
                        placeholder="Введите значение"
                    />
                    <S.CreateLine />
                </S.QuestionItems>
            </S.QuestionBox>
            <S.ButtonResults type="button">
                <S.ButtonResultsText>Отправить</S.ButtonResultsText>
            </S.ButtonResults>
        </S.ConteinerResults>
    );
}
