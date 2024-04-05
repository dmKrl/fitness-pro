import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './Training.style';
import MyProgress from '../../components/MyProgress/MyProgress';
import SelectingWorkout from '../../components/SelectingWorkout/SelectingWorkout';
import Header from '../../components/UI/Header/Header';
import { selectDataCourses } from '../../redux/slices/dataSlices';
import {
    selectWorkoutId,
    setWorkoutsItem,
} from '../../redux/slices/workoutsSlices';
import {
    selectorResults,
    selectorShowModal,
    selectorShowWorkout,
    setShowModal,
} from '../../redux/slices/progressSlice';
import ButtonForFetch from '../../components/UI/ButtonForFetch/ButtonForFetch';
import TrainingProgress from '../../components/TrainingProgress/TrainingProgress';

export default function Training() {
    const dispatch = useDispatch();
    const params = useParams();
    const showModal = useSelector(selectorShowModal);
    const dataCourses = useSelector(selectDataCourses);
    const showWorkout = useSelector(selectorShowWorkout);
    const chosenWorkout = dataCourses?.workouts?.find(
        (workout) => workout.id === Number(params.id),
    );
    const workoutId = useSelector(selectWorkoutId);
    const resultWorkout = useSelector(selectorResults);
    useEffect(() => {
        dispatch(setWorkoutsItem(chosenWorkout?.workout));
    }, [chosenWorkout]);

    const changeShowModal = () => {
        dispatch(setShowModal(true));
    };

    return (
        <S.MainConteiner>
            {!showWorkout && (
                <S.Container>
                    <Header />
                    {workoutId && (
                        <S.MainTraining key={workoutId.id}>
                            <S.LessonName>
                                {workoutId.nameTraining}
                            </S.LessonName>
                            <S.ExercisesForTheDay>
                                {workoutId.nameFull}
                            </S.ExercisesForTheDay>
                            <S.Video>
                                <ReactPlayer
                                    url={workoutId.video}
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
                                    <S.ExercisesName>
                                        Упражнения
                                    </S.ExercisesName>
                                    <S.ListOfExercises>
                                        {workoutId?.exercises?.map(
                                            (exercise, index) => (
                                                <S.Exercises key={index}>
                                                    {exercise.name}
                                                </S.Exercises>
                                            ),
                                        )}
                                    </S.ListOfExercises>
                                    <ButtonForFetch
                                        type="button"
                                        onClick={changeShowModal}
                                    >
                                        <S.ButtonText>
                                            Заполнить свой прогресс
                                        </S.ButtonText>
                                    </ButtonForFetch>
                                </div>
                                <TrainingProgress
                                    workoutId={workoutId}
                                    resultWorkout={resultWorkout}
                                />
                            </S.Sections>
                        </S.MainTraining>
                    )}
                    {showModal && <MyProgress />}
                </S.Container>
            )}
            {showWorkout && <SelectingWorkout />}
        </S.MainConteiner>
    );
}
