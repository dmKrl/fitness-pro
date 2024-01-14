import styled from 'styled-components';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: 40px;
    margin-top: 50px;
`;

export const ImgCard = styled.img`
    width: 360px;
    height: 480px;
`;

export const CardsSkeleton = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: 40px;
    margin-top: 50px;
`;

export const ItemCardSkeleton = styled.div`
    width: 360px;
    height: 480px;
    background-color: #3b29a1;
    border-radius: 30px;
`;
