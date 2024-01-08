import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(119 119 119 / 37%);
    position: absolute;
`;

export const ModalForm = styled.div`
    --modal-width: 366px;
    --modal-height: 401px;

    position: absolute;
    left: calc(50% - (var(--modal-width) / 2));
    top: calc(50% - (var(--modal-height) / 2));
    box-sizing: border-box;
    width: var(--modal-width);
    min-height: var(--modal-height);
    background-color: #ffffff;
    border-radius: 12px;
    padding: 43px 47px 47px 40px;
`;
export const ModalLogo = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 34px;
    background-color: transparent;
`;

export const ModalInput = styled.input`
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05000000074505806px;
    text-align: left;
    width: 100%;
    border: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;

    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #d0cece;
    }
`;

export const ModalHeader = styled.h4`
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.05000000074505806px;
    text-align: left;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 278px;
    height: 52px;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    &:disabled {
        background-color: #303030;
    }
`;

export const PrimaryButton = styled(Button)`
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

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
    width: 100%;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`;

export const Error = styled.div`
    color: coral;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    text-align: left;
`;
