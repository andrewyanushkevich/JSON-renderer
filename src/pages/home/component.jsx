import React from 'react';

import ItemList from './components/ItemList';
import SortBar from './components/SortBar';
import Filter from './components/Filter';

import { StyledDiv } from './styles';

const Home = () => {
  return (
    <StyledDiv>
      <SortBar />
      <div>
        <ItemList />
        <Filter />
      </div>
    </StyledDiv>
  );
};

export default Home;
