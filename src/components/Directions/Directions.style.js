import styled from 'styled-components';

export const DirectionsContainer = styled.div`
    margin-top: 75px;
`;
export const TittleDirections = styled.h2`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
`;
export const DirectionList = styled.ul`
    color: #000;
    display: grid;
    width: 640px;
    margin-left: 32px;
    margin-top: 22px;
    grid-template-columns: repeat(2, 3fr);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    list-style-type: disc;
`;
