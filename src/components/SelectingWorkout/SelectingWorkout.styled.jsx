import styled from 'styled-components';

export const ChoiceTrainingBox = styled.div`
    width: 444px;
    height: 626px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ChoiceTraining = styled.h2`
    padding-top: 36px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;

export const ListOfWorkouts = styled.div`
    width: 307px;
    height: 455px;
    margin-top: 40px;
    overflow-y: scroll;
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: rgba(0, 0, 0, 0.05);
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 10px;
    }
`;

export const ListBox = styled.div`
    width: 278px;
    height: 452px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const BoxTrainingActiv = styled.div`
    width: 278px;
    border-radius: 26px;
    border: 1px solid var(--Mint-90, rgba(6, 177, 110, 1));
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
`;

export const BoxTraining = styled.div`
    width: 278px;
    border-radius: 26px;
    border: 1px solid var(--Mint-90, rgba(0, 0, 0, 1));
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
`;

export const ActivBox = styled.div`
    margin-top: 11.5px;
    display: flex;
    gap: 7px;
    justify-content: center;
    align-items: center;
`;

export const NameWorkoutsActiv = styled.p`
    color: var(--Mint-90, rgba(6, 177, 110, 1));
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 23px */
    letter-spacing: -0.05px;
`;

export const StartWorkoutsActiv = styled.div`
    margin-bottom: 17.5px;
    color: var(--Mint-90, rgba(6, 177, 110, 1));
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 0.016px;
`;

export const NameWorkouts = styled.p`
    margin-top: 11.5px;
    color: var(--Mint-90, rgba(0, 0, 0, 1));
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 115%; /* 23px */
    letter-spacing: -0.05px;
`;

export const StartWorkouts = styled.div`
    margin-bottom: 17.5px;
    color: var(--Mint-90, rgba(0, 0, 0, 1));
    text-align: center;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 0.016px;
`;

// export const  = styled.div``;
