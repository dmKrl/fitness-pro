import styled from 'styled-components';

export const Item = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: 40px;
    margin-top: 50px;
    background-color: #ffffff;
`;

export const ImgSkeleton = styled.div`
    width: 360px;
    height: 480px;
`;
