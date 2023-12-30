import { Link } from 'react-router-dom';
import * as S from './training.style';
import {
    ProgressBarFirst,
    ProgressBarSecond,
    ProgressBarThird,
} from '../../components/ProgressBar/ProgressBar';
// import MyResults from '../components/MyProgress/MyProgress';
// import SelectingWorkout from '../components/SelectingWorkout/SelectingWorkout';
// import AcceptProgress from '../components/AcceptProgress/AcceptProgress';

export default function Training() {
    return (
        <S.Container>
            <S.Header>
                <Link to="/">
                    <S.Logo>
                        <img src="../img/logo.png" alt="logo" />
                    </S.Logo>
                </Link>
                <S.Profile>
                    <img src="../img/icon/Ellipse 376.svg" alt="" />
                    <S.Name>Серге</S.Name>
                    <S.SpanArrow>
                        <img src="../img/icon/Arrow.svg" alt="" />
                    </S.SpanArrow>
                </S.Profile>
            </S.Header>
            <S.MainTraining>
                <S.LessonName>Йога</S.LessonName>
                <S.ExercisesForTheDay>
                    Красота и здоровье / Йога на каждый день / 2 день
                </S.ExercisesForTheDay>
                <S.Video>
                    <img src="../img/Group 48096501.jpg" alt="" />
                </S.Video>
                <S.Sections>
                    <div>
                        <S.ExercisesName>Упражнения</S.ExercisesName>
                        <S.ListOfExercises>
                            <S.Exercises>
                                Наклон вперед (10 повторений)
                            </S.Exercises>
                            <S.Exercises>
                                Наклон назад (10 повторений)
                            </S.Exercises>
                            <S.Exercises>
                                Поднятие ног, согнутых в коленях (5 повторений)
                            </S.Exercises>
                        </S.ListOfExercises>
                        <S.ButtonProgress type="button">
                            <S.ButtonText>Заполнить свой прогресс</S.ButtonText>
                        </S.ButtonProgress>
                    </div>
                    <S.TrainingProgress>
                        <S.MyProgress>
                            Мой прогресс по тренировке 2:
                        </S.MyProgress>
                        <S.ProgressContainer>
                            <S.ExerciseProgress>
                                <S.NameOfExercises>
                                    Наклоны вперед
                                </S.NameOfExercises>
                                <div>
                                    <ProgressBarFirst percent={45} />
                                </div>
                            </S.ExerciseProgress>
                            <S.ExerciseProgress>
                                <S.NameOfExercises>
                                    Наклоны назад
                                </S.NameOfExercises>
                                <div>
                                    <ProgressBarSecond percent={45} />
                                </div>
                            </S.ExerciseProgress>
                            <S.ExerciseProgress>
                                <S.ProgressText>
                                    <S.NameOfExercises>
                                        Поднятие ног, согнутых в коленях
                                    </S.NameOfExercises>
                                </S.ProgressText>
                                <div>
                                    <ProgressBarThird percent={45} />
                                </div>
                            </S.ExerciseProgress>
                        </S.ProgressContainer>
                    </S.TrainingProgress>
                </S.Sections>
            </S.MainTraining>
            {/* <AcceptProgress />
            <SelectingWorkout />
            <MyResults /> */}
        </S.Container>
    );
}
