import styled from 'styled-components';

export const Title = styled.h2`
  justify-content: center;
  font-size: 20px;
  flex-basis: 200px;
`;

export const StyledItem = styled.div`
  height: 30%;
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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
