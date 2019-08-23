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
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  margin: 50px auto;
`;

export const CarouselWrapper = styled.div`
  width: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsWrapper = styled.div`
  text-align: left;
`;

export const RatingWrapper = styled.div`
  margin: 20px 45%;
  width: 100px;
  @media only screen and (max-width: 600px) {
    margin: 0 200px;
  }
`;

export const Price = styled.em`
  font-size: 24px;
`;
