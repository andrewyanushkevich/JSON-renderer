/* eslint-disable max-len */
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import puppeteer from 'puppeteer';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { items } from 'mockups';
import ItemList from 'pages/home/components/ItemList/component';
import ItemListContainer, {
  getItems,
} from 'pages/home/components/ItemList/container';
import * as actions from 'store/actions';

jest.mock('store/actions', () => ({
  filterShapeCreated: jest.fn(),
  getItemsRequest: jest.fn(),
  getItemsResponse: jest.fn(),
  getItemsResponseFail: jest.fn(),
}));

describe('(Component) ItemList', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ItemList items={items} handleGetItems={() => {}} />
      </MemoryRouter>,
    );
    component.setState({ currentPage: 0 });
  });
  it('should render correctly', () => {
    const output = renderer.create(
      <MemoryRouter>
        <ItemList items={items} handleGetItems={() => {}} />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
  it('should change page correctly', () => {
    component
      .find('.ant-pagination-item')
      .at(1)
      .simulate('click');
    expect(component.find('ItemList').state('currentPage')).toBe(2);
    component.unmount();
  });
  it('should render correct number of items', () => {
    const length = component.find('ItemList').state('itemsPerPage');
    expect(component.find('Item').length).toBe(length);
    component.unmount();
  });
  it('Visual regression test', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitFor(5000);
    const screenshot = await page.screenshot();
    browser.close();

    expect(screenshot).toMatchImageSnapshot();
  }, 30000);
});

describe('(Container) Item List ', () => {
  let component;
  const initialState = {
    product: { items, loading: false, error: '' },
    filters: {
      selected: {
        minprice: 11,
        maxprice: 84,
        ratings: [5],
        colors: [],
        sizes: ['M'],
        tags: [],
      },
    },
    sort: { order: 'price_min_max' },
  };
  const mockStore = configureStore([thunk, promiseMiddleware]);
  const store = mockStore(initialState);
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <ItemListContainer />
        </Provider>
      </MemoryRouter>,
    );
  });
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
  it('should correctly sort and filter items', () => {
    expect(component.find('ItemList').props().items).toEqual([
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac70' },
        title: 'Brown top',
        price: 40,
        size: ['XL', 'M', 'XS'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_41451.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_84333.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_18788.jpg',
        ],
        rating: 4.5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Tops'],
        color: ['brown', 'grey'],
      },
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac71' },
        title: 'Black top',
        price: 40,
        size: ['XL', 'M', 'XS'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_14121.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_27096.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_64057.jpg',
        ],
        rating: 4.5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Tops'],
        color: ['black'],
      },
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac72' },
        title: 'Orange top',
        price: 50,
        size: ['XL', 'M', 'S'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_68755.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_63189.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_24527.jpg',
        ],
        rating: 4.5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Tops'],
        color: ['orange', 'white'],
      },
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac73' },
        title: 'Cute black top',
        price: 52,
        size: ['L', 'M', 'S'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103648_45209.JPG',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103649_24529.JPG',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103649_41517.JPG',
        ],
        rating: 4.5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Tops'],
        color: ['black'],
      },
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac68' },
        title: 'Blazer party grey',
        price: 65,
        size: ['XL', 'L', 'M'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_23902.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_46494.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_83861.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_27628.jpg',
        ],
        rating: 4.5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Jackets'],
        color: ['red', 'grey'],
      },
      {
        _id: { $oid: '5bb6b6936cfa75c4e50bac6c' },
        title: 'Blue dress with flowers',
        price: 65,
        size: ['L', 'M', 'S'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/11/source-img/20161011102927_56464.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/11/source-img/20161011102927_19276.jpg',
        ],
        rating: 5,
        description:
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Dresses'],
        color: ['blue'],
      },
    ]);
  });
  it('Should get items', async () => {
    const dispatch = jest.fn();
    jest.spyOn(actions, 'filterShapeCreated');
    jest.spyOn(actions, 'getItemsRequest');
    jest.spyOn(actions, 'getItemsResponse');
    jest.spyOn(actions, 'getItemsResponseFail');

    await getItems()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(actions.filterShapeCreated());
    expect(dispatch).toHaveBeenCalledWith(actions.getItemsRequest());
    expect(dispatch).toHaveBeenCalledWith(actions.getItemsResponse());
    expect(dispatch).toHaveBeenCalledWith(actions.getItemsResponseFail());
  });
});
