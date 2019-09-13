/* istanbul ignore file */
import styled from 'styled-components';
import { Tag } from 'antd';

export const Title = styled.h2`
  justify-content: center;
  font-size: 20px;
  padding: 10px;
`;

export const StyledItem = styled.div`
  & > div,
  h2 {
    display: flex;
    flex-direction: row;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  width: 300px;
  border-radius: 10px;
  margin: 20px 0px;

  background-color: snow;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 28px -7px rgba(0, 0, 0, 0.75);
    transition: 1s;
  }

  @media only screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 160px;
  margin: 0 auto;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px;
`;

export const RatingWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Price = styled.em`
  font-size: 18px;
  width: 50px;
`;

export const TagItem = styled(Tag)`
  margin: 5px;
  color: black;
`;
