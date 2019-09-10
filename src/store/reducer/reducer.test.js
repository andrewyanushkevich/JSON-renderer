import {
  getItemsRequest,
  getItemsResponse,
  getItemsResponseFail,
  filterShapeCreated,
  selectedFilter,
} from 'store/actions';
import itemsReducer from './items';
import filterReducer from './filter';

const initialItemsState = {
  loading: false,
};

describe('Test items reducer', () => {
  test('Get items request', () => {
    const state = itemsReducer(initialItemsState, getItemsRequest());
    expect(state).toEqual({
      loading: true,
    });
  });
  test('Get items response', () => {
    const state = itemsReducer(initialItemsState, getItemsResponse([1, 2, 3]));
    expect(state).toEqual({
      items: [1, 2, 3],
      loading: false,
    });
  });
  test('Get items response fail', () => {
    const state = itemsReducer(
      initialItemsState,
      getItemsResponseFail('Unexpected error!'),
    );
    expect(state).toEqual({
      loading: false,
      error: 'Unexpected error!',
    });
  });
});

const initialFilterState = {
  shape: {},
  selected: {},
};

describe('Test filter reducer', () => {
  test('Create filter shape', () => {
    const state = filterReducer(
      initialFilterState,
      filterShapeCreated({
        price: { min: 0, max: 100 },
      }),
    );
    expect(state).toEqual({
      shape: {
        price: { min: 0, max: 100 },
      },
      selected: {},
    });
  });
  test('Select filter params', () => {
    const state = filterReducer(
      initialFilterState,
      selectedFilter({
        price: { min: 0, max: 100 },
      }),
    );
    expect(state).toEqual({
      shape: {},
      selected: {
        price: { min: 0, max: 100 },
      },
    });
  });
});
