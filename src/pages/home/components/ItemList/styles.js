/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Pagination } from 'antd';

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media only screen and (max-width: 576px) {
    margin: auto;
  }
`;

export const StyledPagination = styled(Pagination)`
  margin: 30px auto;
`;
