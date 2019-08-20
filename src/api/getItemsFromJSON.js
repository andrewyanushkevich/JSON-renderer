import { API_URL } from '../constants';

const getItems = async () => {
  try {
    return await fetch(API_URL, {
      method: 'GET',
      headers: { 'Accept-Encoding': 'gzip' },
    }).then(response => {
      return response.json();
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getItems;
