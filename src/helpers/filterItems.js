const shareCommonElements = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return true;
  }

  const res = arr1.filter(elem => {
    return arr2.includes(elem);
  });

  return res.length !== 0;
};

const filterItemsOnRating = (item, ratings) => {
  return (
    ratings.some(elem => {
      return Math.round(item.rating) === elem;
    }) || ratings.length === 0
  );
};

const filterItems = (items, selectedFilter) => {
  const minprice = selectedFilter.minprice || 0;
  const maxprice = selectedFilter.maxprice || Number.MAX_VALUE;
  return items.filter(elem => {
    return (
      elem.price >= minprice &&
      elem.price <= maxprice &&
      filterItemsOnRating(elem, selectedFilter.ratings) &&
      shareCommonElements(elem.tags, selectedFilter.tags) &&
      shareCommonElements(elem.color, selectedFilter.colors) &&
      shareCommonElements(elem.size, selectedFilter.sizes)
    );
  });
};

export default filterItems;
