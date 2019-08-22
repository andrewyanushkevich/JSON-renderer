import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SORTS from 'constants/sorts';
import { Select } from 'antd';
import SortBarWrapper from './styles';

class SortBar extends Component {
  handleChange = (value) => {
    const { handleSetSortOrder } = this.props;
    handleSetSortOrder(value);
  };

  render() {
    return (
      <SortBarWrapper>
        <Select defaultValue="cheap" onChange={this.handleChange}>
          <Select.Option value={SORTS[0].id}>cheap</Select.Option>
          <Select.Option value={SORTS[1].id}>expensive</Select.Option>
          <Select.Option value={SORTS[2].id}>rating</Select.Option>
        </Select>
      </SortBarWrapper>
    );
  }
}

SortBar.propTypes = {
  handleSetSortOrder: PropTypes.func.isRequired,
};

export default SortBar;
