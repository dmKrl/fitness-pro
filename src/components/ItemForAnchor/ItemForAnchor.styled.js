import styled from 'styled-components';

export const ItemForAnchor = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 34px;
`;

export const AnchorLink = styled.a`
    margin-bottom: 60px;
`;

export const AnchorButton = styled.button`
    width: 147px;
    height: 48px;
    border: none;
    border-radius: 46px;
    background-color: #c7e957;
    font-family: 'StratosSkyeng', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    &:hover {
        background-color: #daf289;
    }
    &:active {
        background-color: #ebffab;
    }
`;
