import React from 'react';

import ItemList from './components/ItemList';
import SortBar from './components/SortBar';

import { StyledDiv } from './styles';

const Home = () => (
  <StyledDiv>
    <SortBar />
    <ItemList />
  </StyledDiv>
);

export default Home;
