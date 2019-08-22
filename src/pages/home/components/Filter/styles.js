/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledFilter = styled.div`
  margin: 100px 10px;
  background-color: lightgray;
  flex-basis: 20%;
  height: 900px;
  padding: 50px 30px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
