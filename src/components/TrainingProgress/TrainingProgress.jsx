import * as S from '../../pages/Training/Training.style';
import ProgressBarFirst from '../ProgressBar/ProgressBar';

function TrainingProgress({ workoutId, resultWorkout }) {
    return (
        <S.TrainingProgress>
            <S.MyProgress>Мой прогресс по тренировке:</S.MyProgress>
            <S.ProgressContainer>
                {workoutId?.exercises?.map((exercise, index) => (
                    <S.ExerciseProgress key={index}>
                        <S.NameOfExercises>
                            {exercise.nameProgress}
                        </S.NameOfExercises>
                        <div>
                            <ProgressBarFirst percent={resultWorkout[index]} />
                        </div>
                    </S.ExerciseProgress>
                ))}
            </S.ProgressContainer>
        </S.TrainingProgress>
    );
}

export default TrainingProgress;
