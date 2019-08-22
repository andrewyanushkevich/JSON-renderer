const sortPriceMinMax = (item1, item2) => {
  return item1.price - item2.price;
};

const sortPriceMaxMin = (item1, item2) => {
  return item2.price - item1.price;
};

const sortRating = (item1, item2) => {
  return item2.rating - item1.rating;
};

const sortItems = (items, sortOrder) => {
  switch (sortOrder) {
    case 'price_min_max':
      items.sort(sortPriceMinMax);
      return items;
    case 'price_max_min':
      items.sort(sortPriceMaxMin);
      return items;
    case 'rating':
      items.sort(sortRating);
      return items;
    default:
      return items;
  }
};

export default sortItems;
