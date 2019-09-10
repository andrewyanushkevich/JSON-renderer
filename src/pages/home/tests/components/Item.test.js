import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Item from 'pages/home/components/Item';

describe('(Component) Item', () => {
  let component;
  const id = '5bb6b6936cfa75c4e50bac5e';
  const clickFn = jest.fn();
  const props = {
    item: {
      _id: { $oid: '5bb6b6936cfa75c4e50bac5e' },
      title: 'Polo red',
      price: 50,
      size: ['XL', 'L', 'M', 'S', 'XS'],
      images: [
        'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg',
      ],
      rating: 4,
      description: 'uspeenatis magna. Sed pulvinar nunc quam, nec port tit',
      tags: ['Polos'],
      color: ['red'],
    },
  };
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Item {...props} onClick={clickFn} />
      </MemoryRouter>,
    );
  });
  it('should render correctly', () => {
    const output = renderer.create(
      <MemoryRouter>
        <Item {...props} onClick={clickFn} />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('Should change location.pathname', () => {
    expect(component.find('Item').props().location.pathname).toBe('/');

    component
      .find('div')
      .first()
      .simulate('click');

    expect(component.find('Item').props().location.pathname).toBe(`/${id}`);
  });
});
