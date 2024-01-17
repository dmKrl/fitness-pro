import styled from 'styled-components';

export const ProgressBarFirst = styled.div`
    width: 278px;
    height: 36px;
    background-color: rgba(237, 236, 255, 1);
    border: 2px solid rgba(86, 94, 239, 1);
    border-radius: 22px;
`;

export const CompletedProgressFirst = styled.div`
    height: 100%;
    background-color: rgba(86, 94, 239, 1);
    border-radius: 22px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    justify-content: flex-end;
    padding-right: 10px;
    overflow: hidden;
`;

export const Percent = styled.span`
    color: rgba(255, 255, 255, 1);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;

// export const  = styled.div``;
