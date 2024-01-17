import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { doc, setDoc } from 'firebase/firestore';
import * as S from './MyProgress.style';
import AcceptProgress from '../AcceptProgress/AcceptProgress';
import { selectWorkoutId } from '../../redux/slices/workoutsSlices';
import { setResultss, setShowModal } from '../../redux/slices/progressSlice';
// import { db } from '../../firebase-config';

export default function MyProgress() {
    const [isSendResults, setIsSendResults] = useState(false);
    const [inputValue, setInputValue] = useState([]);
    const workoutId = useSelector(selectWorkoutId);
    const dispatch = useDispatch();

    const handleInputChange = (index, e) => {
        const newInputValue = [...inputValue];
        newInputValue[index] = e.target.value;
        setInputValue(newInputValue);
    };
    console.log(workoutId);

    // const changeProgressForUser = async (userId) => {
    //     try {
    //         await setDoc(doc(db, 'userProgress', userId), {
    //             bodyflex:
    //          });
    //         // console.log('Document written with ID: ', docRef.id);
    //     } catch (err) {
    //         console.error('Error adding document: ', err);
    //     }
    // };

    const handleSendResult = () => {
        const newProgress = inputValue.map((value, index) => {
            const exercise = workoutId.exercises[index];
            const progress =
                value === 0 ? 0 : Math.round((value / exercise.quantity) * 100);
            return progress;
        });
        console.log(newProgress);

        dispatch(setResultss(newProgress));
        console.log(newProgress);
        setInputValue([]);
        setIsSendResults(true);
        setTimeout(() => {
            setIsSendResults(false);
            dispatch(setShowModal(false));
        }, 2000);
    };

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
                                        {workoutId.exercises?.map(
                                            (exercise, index) => (
                                                <div key={index}>
                                                    <S.QuestionResults>
                                                        {exercise.question}
                                                    </S.QuestionResults>
                                                    <S.AnswerResults
                                                        type="number"
                                                        placeholder="Введите значение"
                                                        value={
                                                            inputValue[index]
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                e,
                                                            )
                                                        }
                                                        min={0}
                                                        max={exercise.quantity}
                                                    />
                                                    <S.CreateLine />
                                                </div>
                                            ),
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
