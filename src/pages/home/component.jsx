/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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
        <Helmet>
          <title>Filter</title>
          <meta name="description" content="Items Filter" />
        </Helmet>
        <Filter display="flex" />
        <div>
          <FilterButton onClick={this.handleCloseFilter} type="primary">
            filter
          </FilterButton>
        </div>
      </>
    ) : (
      <StyledDiv>
        <Helmet>
          <title>Item List</title>
          <meta name="description" content="List of items" />
        </Helmet>
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
