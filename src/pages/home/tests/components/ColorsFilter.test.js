import React from 'react';
import { shallow } from 'enzyme';

import { shape } from 'mockups';
import ColorsFilter from 'pages/home/components/Filter/Filters/ColorsFilter';

describe('(Component) Colors Filter', () => {
  let component;
  const handleChangeFilter = jest.fn();
  const props = {
    shapeColors: shape.colors,
    handleChangeFilter,
    colors: [],
  };
  beforeEach(() => {
    component = shallow(<ColorsFilter {...props} />);
  });
  it('should call changeFilter function', () => {
    component
      .find('Styled(CheckboxGroup)')
      .simulate('change', 'green', 'colors');
    expect(handleChangeFilter).toHaveBeenCalled();
    expect(handleChangeFilter).toHaveBeenCalledWith('green', 'colors');
  });
});
