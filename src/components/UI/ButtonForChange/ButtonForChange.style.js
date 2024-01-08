import styled from 'styled-components';

export default styled.button`
    height: 52px;
    width: 278px;
    border: none;
    border-radius: 46px;
    background: var(--Palette-Purple-90, #580ea2);
    color: #fff;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
    :hover {
        background: #3f007d;
    }
    :active {
        background: var(--Palette-Purple-100, #271a58);
    }
`;
