import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;

export const StyledItem = styled.div`
  width: 60%;
  height: 30%;
  margin: 10%;
  & > div {
    display: flex;
    align-items: space-between;
  }
`;

export const Img = styled.img`
  width: 20%;
  height: 20%;
`;
