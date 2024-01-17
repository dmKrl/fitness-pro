import { useDispatch, useSelector } from 'react-redux';
import * as S from './SelectingWorkout.styled';
import {
    selectWorkoutsItemCourse,
    setWorkoutId,
} from '../../redux/slices/workoutsSlices';
import { setShowWorkout } from '../../redux/slices/progressSlice';

export default function SelectingWorkout() {
    const dispatch = useDispatch();
    const workoutItem = useSelector(selectWorkoutsItemCourse);

    const handleWorkoutClick = (workout) => {
        dispatch(setShowWorkout(false));
        dispatch(setWorkoutId(workout));
        console.log(workout);
    };

    return (
        <S.Background>
            <S.SelectingWorkoutBox>
                <S.SelectingWorkoutContainer>
                    <S.ChoiceTrainingBox>
                        <S.ChoiceTraining>Выберите тренировку</S.ChoiceTraining>
                        <S.ListOfWorkouts>
                            <S.ListBox>
                                {workoutItem?.map((workout, index) => (
                                    <S.BoxTraining
                                        key={index}
                                        onClick={() =>
                                            handleWorkoutClick(workout)
                                        }
                                        active={workoutItem?.id === workout.id}
                                    >
                                        <S.ActivBox>
                                            <S.NameWorkouts>
                                                {workout.name}
                                            </S.NameWorkouts>
                                            <div>
                                                <img
                                                    src="../image/icon/Accept.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </S.ActivBox>
                                        <S.StartWorkouts>
                                            {workout.day}
                                        </S.StartWorkouts>
                                    </S.BoxTraining>
                                ))}
                            </S.ListBox>
                        </S.ListOfWorkouts>
                    </S.ChoiceTrainingBox>
                </S.SelectingWorkoutContainer>
            </S.SelectingWorkoutBox>
        </S.Background>
    );
}
