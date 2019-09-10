import React from 'react';
import { shallow } from 'enzyme';

import Rating from 'blocks/Rating';

describe('Rating ', () => {
  it('should render correct number of stars', () => {
    let props = {
      stars: 3,
      totalStars: 5,
    };
    let component = shallow(<Rating {...props} />);
    expect(component.find({ color: 'orange' }).length).toBe(3);

    props = {
      stars: 3.5,
      totalStars: 5,
    };
    component = shallow(<Rating {...props} />);
    expect(component.find({ color: 'orange' }).length).toBe(4);
  });
});
