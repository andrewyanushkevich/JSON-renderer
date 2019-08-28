/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  @media only screen and (max-width: 576px) {
    margin: 0%;
  }
`;

export const NumberOfItems = styled.div`
  margin: 20px;
  width: 200px;
`;
