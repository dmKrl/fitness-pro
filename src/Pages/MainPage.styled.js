import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #271A58;
`;

export const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
position: relative;
background-color: #271A58;
`;

export const Main = styled.main`
padding-left: calc(50% - 580px);
padding-right: calc(50% - 580px);
`;

export const Navigation = styled.div`
display: flex;
justify-content: space-between;
padding-top: 30px;
`;
