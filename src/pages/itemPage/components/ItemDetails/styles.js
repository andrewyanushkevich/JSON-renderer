import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;

export const StyledItem = styled.div`
  width: 70%;
  height: 50%;
  margin: 10% 15%;
  & > div {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    margin: 0%;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  @media only screen and (max-width: 576px) {
    margin: auto;
  }
`;

export const CarouselWrapper = styled.div`
  width: 50%;
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsWrapper = styled.div`
  text-align: left;
  @media only screen and (max-width: 576px) {
    margin: auto;
  }
`;

export const RatingWrapper = styled.div`
  margin: 20px 45%;
  width: 100px;
  @media only screen and (max-width: 576px) {
    margin: 50px auto;
  }
`;

export const Price = styled.em`
  font-size: 24px;
`;
