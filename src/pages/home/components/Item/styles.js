import styled from 'styled-components';
import { Tag } from 'antd';

export const Title = styled.h2`
  justify-content: center;
  font-size: 20px;
  flex-basis: 200px;
`;

export const StyledItem = styled.div`
  & > div,
  h2 {
    display: flex;
    flex-direction: row;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  height: 30%;
  background-color: snow;
  border-radius: 10px;
  flex-basis: 20%;
  flex-direction: column;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 28px -7px rgba(0, 0, 0, 0.75);
    transition: 1s;
  }

  @media only screen and (max-width: 576px) {
    flex-basis: 100%;
    margin: 0%;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const TagsWrapper = styled.div`
  display: block;
`;

export const RatingWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Price = styled.em`
  font-size: 18px;
  width: 50px;
`;

export const TagItem = styled(Tag)`
  margin: 5px;
  color: black;
`;
