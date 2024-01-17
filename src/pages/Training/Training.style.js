import styled from 'styled-components';

export const MainConteiner = styled.div`
    margin-top: 30px;
`;

export const Container = styled.div`
    width: 1440px;
    margin: 0px auto;
    height: 100%;
    padding: 0px 140px 0px 140px;
`;

export const Header = styled.div`
    height: 74px;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    width: 220px;
    height: 35px;
    flex-shrink: 0;
    margin-top: 30px;
`;

export const Profile = styled.div`
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
`;

export const Name = styled.span`
    color: #000;
    text-align: right;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
`;

export const MainTraining = styled.div`
    margin-top: 75px;
`;

export const LessonName = styled.h1`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
`;

export const ExercisesForTheDay = styled.h2`
    margin-top: 40px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;

export const Video = styled.div`
    width: 100%;
    height: 640px;
    margin-top: 40px;
`;

export const Sections = styled.div`
    margin-top: 75px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const ExercisesName = styled.h2`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;

export const ListOfExercises = styled.ul`
    margin-top: 30px;
    margin-left: 25px;
    list-style-type: square;
`;

export const Exercises = styled.li`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    list-style-type: disc;
`;

export const ButtonProgress = styled.button`
    margin-top: 40px;
    width: 275px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 46px;
    background: var(--Palette-Purple-90, rgba(88, 14, 162, 1));
`;
export const ButtonText = styled.p`
    color: rgba(250, 250, 250, 1);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
`;

export const TrainingProgress = styled.div`
    width: 638px;
    height: 100%;
    flex-shrink: 0;
    border-radius: 30px;
    background: rgba(242, 242, 242, 1);
`;

export const MyProgress = styled.h2`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 36px;
`;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin: 41px 55px 36px 44px;
`;

export const ExerciseProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
`;

export const ProgressText = styled.div`
    width: 227px;
    height: 64px;
`;

export const NameOfExercises = styled.p`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;

export const SpanArrow = styled.span`
    cursor: pointer;
`;
// export const  = styled.div``;
