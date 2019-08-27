/* eslint-disable arrow-body-style */
import styled from 'styled-components';
import { Checkbox } from 'antd';

export const StyledFilter = styled.article`
  margin: 100px 10px;
  background-color: lightgray;
  max-width: 500px;
  flex-basis: 20%;
  padding: 50px 20px;
  @media only screen and (max-width: 576px) {
    display: ${props => props.display || 'none'};
    background-color: white;
    flex-direction: column;
  }
`;

export const RatingWrapper = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  & > label {
    display: flex;
    flex-direction: row;
  }
`;

export const SizesWrapper = styled(Checkbox.Group)`
  padding: 10 0px;
  display: flex;
  flex-direction: column;
`;

export const TagsWrapper = styled(Checkbox.Group)`
  padding: 10 0px;
  display: flex;
  flex-direction: column;
`;

export const ColorsWrapper = styled(Checkbox.Group)`
  padding: 10 0px;
  display: flex;
  flex-direction: column;
`;
