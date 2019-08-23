/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1200px;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;
