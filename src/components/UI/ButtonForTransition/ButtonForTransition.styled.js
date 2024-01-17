import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyled = styled(NavLink)`
    padding: 10px 20px;
    border: none;
    border-radius: 46px;
    background-color: #c7e957;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    color: #000000;
    &:hover {
        background-color: #daf289;
    }
    &:active {
        background-color: #ebffab;
    }
`;
export const ButtonForTrans = styled.button`
    border: none;
    background: none;
`;
