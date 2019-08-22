import styled from 'styled-components';

export const StyledFilter = styled.div`
  margin: 100px 10px;
  background-color: lightgray;
  flex-basis: 20%;
  height: 900px;
  padding: 50px 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const RatingWrapper = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
  }
  margin: 40px;
`;

export const SizesWrapper = styled.div`
  padding: 10px;
  & > div {
    display: flex;
    flex-direction: row;
    & > label {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const TagsWrapper = styled.div`
  padding: 10px;
`;

export const ColorsWrapper = styled.div`
  padding: 10px;
`;
