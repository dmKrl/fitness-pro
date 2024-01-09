import * as S from './SelectingWorkout.styled';

export default function SelectingWorkout() {
    return (
        <S.ChoiceTrainingBox>
            <S.ChoiceTraining>Выберите тренировку</S.ChoiceTraining>
            <S.ListOfWorkouts>
                <S.ListBox>
                    <S.BoxTrainingActiv>
                        <S.ActivBox>
                            <S.NameWorkoutsActiv>
                                Утренняя практика
                            </S.NameWorkoutsActiv>
                            <div>
                                <img src="../image/icon/Accept.svg" alt="" />
                            </div>
                        </S.ActivBox>
                        <S.StartWorkoutsActiv>
                            Йога на каждый день / 1 день
                        </S.StartWorkoutsActiv>
                    </S.BoxTrainingActiv>
                    <S.BoxTrainingActiv>
                        <S.ActivBox>
                            <S.NameWorkoutsActiv>
                                Красота и здоровье
                            </S.NameWorkoutsActiv>
                            <div>
                                <img src="../image/icon/Accept.svg" alt="" />
                            </div>
                        </S.ActivBox>
                        <S.StartWorkoutsActiv>
                            Йога на каждый день / 2 день
                        </S.StartWorkoutsActiv>
                    </S.BoxTrainingActiv>
                    <S.BoxTraining>
                        <S.NameWorkouts>Асаны стоя</S.NameWorkouts>
                        <S.StartWorkouts>
                            Йога на каждый день / 3 день{' '}
                        </S.StartWorkouts>
                    </S.BoxTraining>
                    <S.BoxTraining>
                        <S.NameWorkouts>Растягиваем мышцы бедра</S.NameWorkouts>
                        <S.StartWorkouts>
                            Йога на каждый день / 4 день{' '}
                        </S.StartWorkouts>
                    </S.BoxTraining>
                    <S.BoxTraining>
                        <S.NameWorkouts>Гибкость спины</S.NameWorkouts>
                        <S.StartWorkouts>
                            Йога на каждый день / 5 день{' '}
                        </S.StartWorkouts>
                    </S.BoxTraining>
                    <S.BoxTraining>
                        <S.NameWorkouts>Гибкость спины</S.NameWorkouts>
                        <S.StartWorkouts>
                            Йога на каждый день / 5 день{' '}
                        </S.StartWorkouts>
                    </S.BoxTraining>
                </S.ListBox>
            </S.ListOfWorkouts>
        </S.ChoiceTrainingBox>
    );
}
