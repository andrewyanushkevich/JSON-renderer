import API_URL from 'constants/api';

const getItems = async () => {
  try {
    return await fetch(API_URL).then(response => {
      return response.json();
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getItems;
