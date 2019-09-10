import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { shape, selected } from 'mockups';
import Filter from 'pages/home/components/Filter/component';

describe('(Component) Filter', () => {
  let component;
  const handleSetFilter = jest.fn();
  const props = {
    shape,
    selected,
    handleSetFilter,
  };
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Filter {...props} />
      </MemoryRouter>,
    );
    component.setState(selected);
  });
  it('should render correctly', () => {
    const output = renderer.create(
      <MemoryRouter>
        <Filter {...props} />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
  it('should correctly change filters', () => {
    const instance = component.find('Filter').instance();
    instance.handleChangeFilter(['green'], 'colors');
    expect(component.find('Filter').state('colors')).toEqual(['green']);
  });
  it('should correctly reset filters', () => {
    const instance = component.find('Filter').instance();
    instance.handleResetFilter();
    expect(component.find('Filter').state()).toEqual({
      minprice: 0,
      maxprice: 110,
      ratings: [],
      sizes: [],
      tags: [],
      colors: [],
      search: '',
    });
  });
  it('should correctly save search result to state', () => {
    const instance = component.find('Filter').instance();
    instance.handleSearch('Hello');
    expect(component.find('Filter').state('search')).toBe('Hello');
  });
  it('should call changeFilter function', () => {
    const instance = component.find('Filter').instance();
    instance.handleChangeFilter(['green'], 'colors');
    expect(handleSetFilter).toHaveBeenCalled();
  });
});
