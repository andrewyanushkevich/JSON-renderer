/* eslint-disable no-param-reassign */
const createPriceFilterShape = (shape, item) => {
  shape.price.max =
    shape.price.max <= item.price ? item.price : shape.price.max;
};

const createRatingFilterShape = (shape, item) => {
  shape.rating.max =
    shape.rating.max <= item.rating ? item.rating : shape.rating.max;
};

const createColorsFilterShape = (shape, item) => {
  item.color.forEach(elem => {
    if (!shape.colors.includes(elem)) {
      shape.colors.push(elem);
    }
  });
};

const createSizesFilterShape = (shape, item) => {
  item.size.forEach(elem => {
    if (!shape.sizes.includes(elem)) {
      shape.sizes.push(elem);
    }
  });
};

const createTagsFilterShape = (shape, item) => {
  item.tags.forEach(elem => {
    if (!shape.tags.includes(elem)) {
      shape.tags.push(elem);
    }
  });
};

const createFiltersShape = items => {
  const shape = {
    price: { min: 0, max: 0 },
    rating: { min: 0, max: 0 },
    colors: [],
    tags: [],
    sizes: [],
  };
  items.forEach(element => {
    createPriceFilterShape(shape, element);
    createRatingFilterShape(shape, element);
    createColorsFilterShape(shape, element);
    createSizesFilterShape(shape, element);
    createTagsFilterShape(shape, element);
  });
  return shape;
};

export default createFiltersShape;
