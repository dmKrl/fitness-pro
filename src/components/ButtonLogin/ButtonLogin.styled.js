import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SpanLogin = styled.span`
    color: #ffffff;
    font-family: 'StratosSkyeng', sans-serif;
    font-weight: 400;
    font-size: 16px;
`;

export const ButtonLoginStyled = styled(NavLink)`
    padding: 5px 16px;
    border-radius: 46px;
    background-color: #140d40;
    border: none;
    color: #ffffff;
    font-family: 'StratosSkyeng', sans-serif;
    font-weight: 400;
    font-size: 16px;
    &:hover {
        background-color: #2d1f79;
    }
    &:active {
        background-color: #3b29a1;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
`;

export const Name = styled.span`
    color: #ffffff;
    text-align: right;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.1px;
`;

export const SpanArrow = styled.span`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
`;

export const NavMenu = styled.div`
    display: block;
    visibility: visible;
    padding-left: calc(50% - 580px);
    padding-right: calc(50% - 580px);
    position: absolute;
    right: 0px;
    top: 60px;
`;

export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    align-items: flex-start;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
`;

export const MenuLink = styled(NavLink)`
    font-family: 'StratosSkyeng', sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
