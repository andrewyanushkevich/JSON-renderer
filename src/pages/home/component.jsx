/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import ItemList from './components/ItemList';
import SortBar from './components/SortBar';
import Filter from './components/Filter';

import { StyledDiv, FilterButton } from './styles';

class Home extends Component {
  state = {
    showModalFilter: false,
  };

  showFilter = () => {
    this.setState({
      showModalFilter: true,
    });
  };

  handleCloseFilter = () => {
    this.setState({
      showModalFilter: false,
    });
  };

  render() {
    const { showModalFilter } = this.state;
    return showModalFilter ? (
      <>
        <Filter display="flex" />
        <div>
          <FilterButton onClick={this.handleCloseFilter} type="primary">
            filter
          </FilterButton>
        </div>
      </>
    ) : (
      <StyledDiv>
        <div>
          <SortBar />
          <ItemList />
        </div>
        <Filter />
        <FilterButton onClick={this.showFilter} type="primary">
          filter
        </FilterButton>
      </StyledDiv>
    );
  }
}

export default Home;
