import { useState } from 'react';
import * as S from './MyProgress.style';
import AcceptProgress from '../AcceptProgress/AcceptProgress';

export default function MyProgress({
    selectedWorkoutId,
    setShowModal,
    setProgress,
}) {
    const [isSendResults, setIsSendResults] = useState(false);
    const [inputValue, setInputValue] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const validateForm = () => {
        const formValid = Object.values(inputValue).every(
            (value) => value !== '',
        );
        setIsFormValid(formValid);
    };

    const handleInputChange = (index, e) => {
        setInputValue((prevInputValue) => ({
            ...prevInputValue,
            [index]: e.target.value,
        }));
        validateForm();
    };

    const handleSendResult = () => {
        if (!isFormValid) {
            setErrorMessage('Пожалуйста, заполните все поля');
            return;
        }
        const newProgress = Object.values(inputValue).map((value, index) => {
            const exercise = selectedWorkoutId.exercises[index];
            const progress =
                value === 0 ? 0 : Math.round((value / exercise.quantity) * 100);
            return progress;
        });
        setProgress(newProgress);
        console.log(newProgress);
        setInputValue({});
        setIsSendResults(true);
        setTimeout(() => {
            setIsSendResults(false);
            setShowModal(false);
        }, 2000);
    };

    const handleKeyPress = (e) => {
        const { value } = e.target;
        const { max } = e.target.attributes;
        if (value > max.value) {
            e.preventDefault();
        }
    };

    console.log(isSendResults);
    return (
        <S.Background>
            <S.SelectingWorkoutBox>
                <S.SelectingWorkoutContainer>
                    <S.ConteinerResults>
                        {!isSendResults ? (
                            <>
                                <S.MyResultsText>Мой прогресс</S.MyResultsText>
                                <S.QuestionBox>
                                    <S.QuestionItems>
                                        {selectedWorkoutId?.exercises.map(
                                            (exercise, index) => (
                                                <>
                                                    <S.QuestionResults
                                                        key={exercise.id}
                                                    >
                                                        {exercise.question}
                                                    </S.QuestionResults>
                                                    <S.AnswerResults
                                                        type="number"
                                                        placeholder="Введите значение"
                                                        value={
                                                            inputValue[index] ||
                                                            ''
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                e,
                                                            )
                                                        }
                                                        onKeyDown={
                                                            handleKeyPress
                                                        }
                                                        min={0}
                                                        max={exercise.quantity}
                                                    />
                                                    <S.CreateLine />
                                                </>
                                            ),
                                        )}
                                        {errorMessage && (
                                            <S.Error>{errorMessage}</S.Error>
                                        )}
                                    </S.QuestionItems>
                                </S.QuestionBox>
                                <S.ButtonResults
                                    type="button"
                                    onClick={handleSendResult}
                                >
                                    <S.ButtonResultsText>
                                        Отправить
                                    </S.ButtonResultsText>
                                </S.ButtonResults>
                            </>
                        ) : (
                            <AcceptProgress />
                        )}
                    </S.ConteinerResults>
                </S.SelectingWorkoutContainer>
            </S.SelectingWorkoutBox>
        </S.Background>
    );
}
