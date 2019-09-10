import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SortBar from 'pages/home/components/SortBar/component';

describe('(Component) SortBar', () => {
  let component;
  const handleSetSortOrder = jest.fn();
  const props = {
    filteredItems: 3,
    items: 5,
    handleSetSortOrder,
  };
  beforeEach(() => {
    component = mount(<SortBar {...props} />);
  });
  it('should render correctly', () => {
    const output = renderer.create(
      <SortBar {...props} handleSetSortOrder={() => {}} />,
    );
    expect(output).toMatchSnapshot();
  });
  it('should show correct number of filtered items', () => {
    expect(component.find('p').text()).toBe('Showing 3 of 5');
    component.unmount();
  });
  it('should change value correctly', () => {
    const instance = component.instance();
    instance.handleChange('foo');
    expect(handleSetSortOrder).toHaveBeenCalled();
    expect(handleSetSortOrder).toHaveBeenCalledWith('foo');
  });
});
