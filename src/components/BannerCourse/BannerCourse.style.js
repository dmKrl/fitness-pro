import styled from 'styled-components';

export const BlockBannerCourse = styled.div`
    margin-top: 75px;
    background-image: url(${(props) => props.$imageLarge});
    width: 1160px;
    height: 310px;
    position: relative;
    border-radius: 30px;
`;
export const BannerTitle = styled.h1`
    color: #000;
    padding: 30px;
    width: 528px;
    height: 181px;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: -0.8px;
`;
export const BannerTitle2 = styled.h1`
    margin-top: 75px;
    width: 1160px;
    height: 310px;
    position: relative;
`;
