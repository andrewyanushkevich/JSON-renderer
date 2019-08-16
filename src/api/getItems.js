const getItems = () => {
  try {
    return fetch(
      "https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json",
      {
        method: "GET",
        headers: { "Accept-Encoding": "gzip" }
      }
    ).then(response => {
      return response.json();
    });
  } catch (err) {
  }
};

export default getItems;
