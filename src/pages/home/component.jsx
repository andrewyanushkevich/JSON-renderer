import React from 'react';

import ItemList from './components/ItemList';
import SortBar from './components/SortBar';
import Filter from './components/Filter';

import { StyledDiv } from './styles';

const Home = () => {
  return (
    <StyledDiv>
      <div>
        <SortBar />
        <ItemList />
      </div>
      <Filter />
    </StyledDiv>
  );
};

export default Home;
