import styled from 'styled-components';

export const ConteinerResults = styled.div`
    width: 444px;
    height: 554px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MyResultsText = styled.h2`
    display: flex;
    justify-content: center;
    padding-top: 36px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`;

export const QuestionBox = styled.div`
    margin: 30px 43px 40px 41px;
    display: flex;
    gap: 30px;
    flex-direction: column;
`;

export const QuestionItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionResults = styled.p`
    margin-bottom: 20px;
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`;

export const AnswerResults = styled.input`
    color: rgba(208, 206, 206, 1);
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
    outline: 0;
    border: 0px solid black;
    border-radius: 5px;
    &:active {
        outline: none;
    }
    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

export const CreateLine = styled.div`
    width: 361px;
    border-top: 3px solid rgba(208, 206, 206, 1);
    margin-top: 8px;
`;

export const ButtonResults = styled.button`
    width: 275px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 46px;
    background: var(--Palette-Purple-90, rgba(88, 14, 162, 1));
`;

export const ButtonResultsText = styled.div`
    color: rgba(250, 250, 250, 1);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
`;

// export const  = styled.div``;
