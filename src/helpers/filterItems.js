const shareCommonElements = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return true;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
};

const filterItems = (items, filter) => {
  const minPrice = filter.minPrice || 0;
  const maxPrice = filter.maxPrice || Number.MAX_VALUE;
  const minRating = filter.minRating || 0;
  const maxRating = filter.maxRating || 5;
  const filtered = items.filter(elem => {
    return (
      elem.price >= minPrice &&
      elem.price <= maxPrice &&
      elem.rating >= minRating &&
      elem.rating <= maxRating &&
      shareCommonElements(elem.tags, filter.tags) &&
      shareCommonElements(elem.color, filter.colors) &&
      shareCommonElements(elem.size, filter.sizes)
    );
  });
  if (filter.priceSort === 'increasing') {
    filtered.sort((elem1, elem2) => elem1.price - elem2.price);
  } else {
    filtered.sort((elem1, elem2) => elem2.price - elem1.price);
  }
  if (filter.ratingSort === 'increasing') {
    filtered.sort((elem1, elem2) => elem1.rating - elem2.rating);
  } else {
    filtered.sort((elem1, elem2) => elem2.rating - elem1.rating);
  }
  return filtered;
};

export default filterItems;
