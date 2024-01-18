import * as S from '../MyProgress/MyProgress.style';

function MyResultContainer({
    handleInputChange,
    handleKeyDown,
    handleSendResult,
    workoutId,
    inputValue,
}) {
    return (
        <>
            <S.MyResultsText>Мой прогресс</S.MyResultsText>
            <S.QuestionBox>
                <S.QuestionItems>
                    {workoutId.exercises?.map((exercise, index) => (
                        <div key={index}>
                            <S.QuestionResults>
                                {exercise.question}
                            </S.QuestionResults>
                            <S.AnswerResults
                                type="number"
                                placeholder="Введите значение"
                                value={inputValue[index]}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onChange={(e) => handleInputChange(index, e)}
                                min={0}
                                max={exercise.quantity}
                            />
                            <S.CreateLine />
                        </div>
                    ))}
                </S.QuestionItems>
            </S.QuestionBox>
            <S.ButtonResults type="button" onClick={handleSendResult}>
                <S.ButtonResultsText>Отправить</S.ButtonResultsText>
            </S.ButtonResults>
        </>
    );
}

export default MyResultContainer;
