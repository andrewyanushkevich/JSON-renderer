import { getItemsRequest, getItemsResponse } from './actions';

describe('Test actions', () => {
  test('Get items request', () => {
    const action = getItemsRequest();
    expect(action).toEqual({
      type: 'GET_ITEMS_REQUEST',
    });
  });
  test('Get items response', () => {
    const action = getItemsResponse([1, 2, 3]);
    expect(action).toEqual({
      type: 'GET_ITEMS_RESPONSE',
      items: [1, 2, 3],
    });
  });
});
