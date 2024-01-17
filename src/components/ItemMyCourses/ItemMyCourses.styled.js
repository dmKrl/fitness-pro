import styled from 'styled-components';

export const CardCourseBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: 40px;
`;

export const CardCourseHeader = styled.h2`
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 40px;
    margin-bottom: 30px;
`;

export const CardsSkeleton = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: 40px;
`;

export const ItemCardSkeleton = styled.div`
    width: 360px;
    height: 480px;
    background-color: #bdbebd;
    border-radius: 30px;
`;

export const CardCourse = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 5px -5px 16px 6px;
    display: flex;
    position: relative;
    border-radius: 30px;
`;

export const ImgCardCourse = styled.img`
    width: 360px;
    height: 480px;
    border-radius: 30px;
`;

export const CourseButtonBox = styled.div`
    position: absolute;
    left: 25px;
    top: 410px;
`;
