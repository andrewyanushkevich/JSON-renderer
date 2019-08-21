import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;

export const StyledItem = styled.div`
  width: 60%;
  height: 30%;
  margin: 10%;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 50px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const TagsWrapper = styled.div`
  text-align: center;
`;

export const RatingWrapper = styled.div`
  margin: auto;
  width: 200px;
`;

export const Price = styled.em`
  font-size: 24px;
  width: 50px;
`;
