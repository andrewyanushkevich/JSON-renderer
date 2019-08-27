/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  @media only screen and (max-width: 576px) {
    margin: 0 25%;
  }
`;

export const NumberOfItems = styled.div`
  margin: 20px;
  width: 200px;
`;
