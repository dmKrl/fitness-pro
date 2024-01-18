import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './MyProgress.style';
import AcceptProgress from '../AcceptProgress/AcceptProgress';
import { selectWorkoutId } from '../../redux/slices/workoutsSlices';
import { setResultss, setShowModal } from '../../redux/slices/progressSlice';
import MyResultContainer from '../MyResultContainer/MyResultContainer';

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

    const handleKeyDown = (e, index) => {
        const exercise = workoutId.exercises[index];
        const minValue = 0;
        const maxValue = exercise.quantity;
        const newValue = parseInt(e.target.value + e.key, 10);
        if (newValue < minValue || newValue > maxValue) {
            e.preventDefault();
        }
    };

    const handleSendResult = () => {
        const newProgress = inputValue.map((value, index) => {
            const exercise = workoutId.exercises[index];
            const progress =
                value === 0 ? 0 : Math.round((value / exercise.quantity) * 100);
            return progress;
        });
        dispatch(setResultss(newProgress));
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
                    <S.ContainerResults>
                        {!isSendResults ? (
                            <MyResultContainer
                                handleSendResult={handleSendResult}
                                handleKeyDown={handleKeyDown}
                                handleInputChange={handleInputChange}
                                workoutId={workoutId}
                                inputValue={inputValue}
                            />
                        ) : (
                            <AcceptProgress />
                        )}
                    </S.ContainerResults>
                </S.SelectingWorkoutContainer>
            </S.SelectingWorkoutBox>
        </S.Background>
    );
}
