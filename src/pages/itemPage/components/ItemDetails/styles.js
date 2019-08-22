import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;

export const StyledItem = styled.div`
  width: 60%;
  height: 50%;
  margin: 10% 20%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  margin: 50px auto;
  background-color: grey;
`;

export const TagsWrapper = styled.div`
  text-align: center;
`;

export const RatingWrapper = styled.div`
  margin: 20px 45%;
  width: 10%;
  @media only screen and (max-width: 600px) {
    margin: 0 200px;
  }
`;

export const Price = styled.em`
  font-size: 24px;
`;
