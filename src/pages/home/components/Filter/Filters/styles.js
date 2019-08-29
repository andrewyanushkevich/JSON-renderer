import styled from 'styled-components';
import { Checkbox } from 'antd';

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
