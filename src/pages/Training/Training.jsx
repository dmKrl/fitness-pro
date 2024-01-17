import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './Training.style';
import ProgressBarFirst from '../../components/ProgressBar/ProgressBar';
import MyProgress from '../../components/MyProgress/MyProgress';
import SelectingWorkout from '../../components/SelectingWorkout/SelectingWorkout';
import Header from '../../components/UI/Header/Header';
import data from '../../data.json';
// import { selectDataCourses } from '../../redux/slices/dataSlices';
import { setWorkoutsItem } from '../../redux/slices/workoutsSlices';

export default function Training() {
    const [showWorkout, setShowWorkout] = useState(true);
    const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [percent, setProgress] = useState(
        Array(selectedWorkoutId?.exercises.length).fill(0),
    );
    const dispatch = useDispatch();
    const params = useParams();
    // const dataCourses = useSelector(selectDataCourses);
    const chosenWorkout = data?.workouts?.find(
        (workout) => workout.id === Number(params.id),
    );

    useEffect(() => {
        dispatch(setWorkoutsItem(chosenWorkout.workout));
    }, [chosenWorkout]);

    useEffect(() => {
        if (selectedWorkoutId) {
            setProgress(Array(selectedWorkoutId?.exercises.length).fill(0));
        }
    }, [selectedWorkoutId]);

    const handleWorkoutSelect = (workout) => {
        setSelectedWorkoutId(workout);
        const newProgress = workout.exercises.map(
            (exercise) => exercise.quantity,
        );
        setProgress(newProgress);
        setShowWorkout(false);
    };

    const handleWorkoutProgressClick = () => {
        setShowModal(true);
    };

    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <S.MainConteiner>
            <S.Container>
                <Header />
                {selectedWorkoutId && (
                    <S.MainTraining key={selectedWorkoutId.id}>
                        <S.LessonName>
                            {selectedWorkoutId.nameTraining}
                        </S.LessonName>
                        <S.ExercisesForTheDay>
                            {selectedWorkoutId.nameFull}
                        </S.ExercisesForTheDay>
                        <S.Video>
                            <ReactPlayer
                                url={selectedWorkoutId.video}
                                width="100%"
                                height="100%"
                                controls
                                volume={0.8}
                                muted
                                loop
                            />
                        </S.Video>
                        <S.Sections>
                            <div>
                                <S.ExercisesName>Упражнения</S.ExercisesName>
                                <S.ListOfExercises>
                                    {selectedWorkoutId?.exercises.map(
                                        (exercise) => (
                                            <S.Exercises key={exercise.name}>
                                                {exercise.name}
                                            </S.Exercises>
                                        ),
                                    )}
                                </S.ListOfExercises>
                                <S.ButtonProgress
                                    type="button"
                                    onClick={handleWorkoutProgressClick}
                                >
                                    <S.ButtonText>
                                        Заполнить свой прогресс
                                    </S.ButtonText>
                                </S.ButtonProgress>
                            </div>
                            <S.TrainingProgress>
                                <S.MyProgress>
                                    Мой прогресс по тренировке:
                                </S.MyProgress>
                                <S.ProgressContainer>
                                    {selectedWorkoutId?.exercises.map(
                                        (exercise, index) => (
                                            <S.ExerciseProgress
                                                key={exercise.id}
                                            >
                                                <S.NameOfExercises>
                                                    {exercise.nameProgress}
                                                </S.NameOfExercises>
                                                <div>
                                                    <ProgressBarFirst
                                                        percent={percent[index]}
                                                    />
                                                </div>
                                            </S.ExerciseProgress>
                                        ),
                                    )}
                                </S.ProgressContainer>
                            </S.TrainingProgress>
                        </S.Sections>
                    </S.MainTraining>
                )}
                {showModal && (
                    <MyProgress
                        selectedWorkoutId={selectedWorkoutId}
                        setShowModal={setShowModal}
                        setProgress={handleProgressChange}
                    />
                )}
            </S.Container>
            {showWorkout && (
                <SelectingWorkout onWorkoutSelect={handleWorkoutSelect} />
            )}
        </S.MainConteiner>
    );
}
