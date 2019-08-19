import React, { Component } from 'react';

import ItemList from '../../blocks/ItemList';
import Filter from '../../blocks/Filter';

import { StyledDiv } from './styles';

class Home extends Component {
  render() {
    return (
      <StyledDiv>
        <ItemList />
        <Filter />
      </StyledDiv>
    );
  }
}

export default Home;
