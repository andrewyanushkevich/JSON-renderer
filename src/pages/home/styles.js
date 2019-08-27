/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button } from 'antd';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  & > div {
    display: flex;
    flex-direction: column;
    flex-basis: 80%;
  }
`;

export const FilterButton = styled(Button)`
  display: none;
  @media only screen and (max-width: 576px) {
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: flex-end;
    bottom: 5px;
    right: 5px;
    margin: auto;
  }
`;
