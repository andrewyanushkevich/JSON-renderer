import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const StyledItem = styled.div`
  width: 60%;
  height: 30%;
  margin: 10%;
  & > div {
    display: flex;
    align-items: space-between;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    & > div {
      display: block;
    }
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

export const Rating = styled.b`
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    margin: 0 40%;
  }
`;

export const Price = styled.em`
  font-size: 24px;
`;
