/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
import styled from 'styled-components';

export const StyledFilter = styled.article`
  margin: 100px 10px;
  background-color: lightgray;
  max-width: 400px;
  min-width: 200px;
  flex-basis: 15%;
  padding: 50px 20px;
  @media only screen and (max-width: 576px) {
    display: ${props => props.display || 'none'};
    background-color: snow;
    flex-direction: column;
  }
`;

export const ResetButton = styled.div`
  margin: 30px 10px;
`;
