import styled from 'styled-components';

const SortBarWrapper = styled.div`
  flex-basis: 20px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 20px;
  & > div {
    width: 150px;
  }

  & > p {
    font-size: 18px;
  }

  @media only screen and (max-width: 576px) {
    justify-content: space-around;
    margin: 50px;
    & > div {
      width: 100px;
    }

    & > p {
      font-size: 14px;
    }
  }
`;

export default SortBarWrapper;
