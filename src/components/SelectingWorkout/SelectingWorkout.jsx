import { useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import * as S from './SelectingWorkout.styled';
// import { db } from '../../firebase-config';
// import { selectDataCourses } from '../../redux/slices/dataSlices';
import { selectWorkoutsItemCourse } from '../../redux/slices/workoutsSlices';

export default function SelectingWorkout({ onWorkoutSelect }) {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    // const dataCourses = useSelector(selectDataCourses);
    const workoutItem = useSelector(selectWorkoutsItemCourse);
    console.log(workoutItem);
    // const workoutsCollection = collection(db, 'data');

    const handleWorkoutClick = (workout) => {
        setSelectedWorkout(workout);
        console.log(workout);
        onWorkoutSelect(workout);
    };

    return (
        <S.Background>
            <S.SelectingWorkoutBox>
                <S.SelectingWorkoutContainer>
                    <S.ChoiceTrainingBox>
                        <S.ChoiceTraining>Выберите тренировку</S.ChoiceTraining>
                        <S.ListOfWorkouts>
                            <S.ListBox>
                                {workoutItem?.map((workout) => (
                                    <S.BoxTraining
                                        key={workout.id}
                                        onClick={() =>
                                            handleWorkoutClick(workout)
                                        }
                                        active={
                                            selectedWorkout?.id === workout.id
                                        }
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
