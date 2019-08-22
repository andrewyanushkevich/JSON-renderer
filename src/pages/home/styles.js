/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
  }
`;
