const shareCommonElements = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return true;
  }

  const res = arr1.filter(elem => arr2.includes(elem));

  return res.length !== 0;
};

const filterItemsOnRating = (item, ratings) =>
  ratings.some(elem => Math.round(item.rating) === elem) ||
  ratings.length === 0;

const filterItems = (items, selectedFilter) => {
  const minprice = selectedFilter.minprice || 0;
  const maxprice = selectedFilter.maxprice || Number.MAX_VALUE;
  const search = selectedFilter.search || '';
  return items.filter(
    elem =>
      elem.price >= minprice &&
      elem.price <= maxprice &&
      filterItemsOnRating(elem, selectedFilter.ratings) &&
      shareCommonElements(elem.tags, selectedFilter.tags) &&
      shareCommonElements(elem.color, selectedFilter.colors) &&
      shareCommonElements(elem.size, selectedFilter.sizes) &&
      elem.title.toLowerCase().includes(search.trim().toLowerCase()),
  );
};

export default filterItems;
