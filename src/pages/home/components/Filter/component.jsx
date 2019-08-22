/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form, Checkbox, Slider } from 'antd';
import PropTypes from 'prop-types';

import Rating from 'blocks/Rating';
import { StyledFilter } from './styles';

class Filter extends Component {
  componentDidUpdate() {
    const { filter } = this.props;
    filter(this.state);
  }

  handleChangePrice = e => {
    this.setState({
      minPrice: e[0],
      maxPrice: e[1],
    });
  };

  handleChangeRating = e => {
    this.setState({
      rating: e,
    });
  };

  handleChangeColors = e => {
    this.setState({
      colors: e,
    });
  };

  handleChangeSizes = e => {
    this.setState({
      sizes: e,
    });
  };

  handleChangeTags = e => {
    this.setState({
      tags: e,
    });
  };

  render() {
    const { form, shape } = this.props;
    const { getFieldDecorator } = form;
    return shape.rating ? (
      <StyledFilter>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item label="Price" labelAlign="right">
            {getFieldDecorator('price')(
              <Slider
                range
                min={shape.price.min}
                max={shape.price.max}
                defaultValue={[shape.price.min, shape.price.max]}
                onAfterChange={this.handleChangePrice}
                marks={{
                  [shape.price.min]: shape.price.min,
                  [shape.price.max]: shape.price.max,
                }}
              />,
            )}
          </Form.Item>
          <Form.Item label="Rating" labelAlign="right">
            {getFieldDecorator('minRating')(
              <Checkbox.Group
                onChange={this.handleChangeRating}
                options={[
                  {
                    label: <Rating stars={1} totalStars={5} />,
                    value: 1,
                  },
                  {
                    label: <Rating stars={2} totalStars={5} />,
                    value: 2,
                  },
                  {
                    label: <Rating stars={3} totalStars={5} />,
                    value: 3,
                  },
                  {
                    label: <Rating stars={4} totalStars={5} />,
                    value: 4,
                  },
                  {
                    label: <Rating stars={5} totalStars={5} />,
                    value: 5,
                  },
                ]}
              ></Checkbox.Group>,
            )}
          </Form.Item>
          <Form.Item label="Sizes">
            {getFieldDecorator('sizes')(
              <Checkbox.Group
                onChange={this.handleChangeSizes}
                options={shape.sizes.map(elem => {
                  return {
                    label: elem,
                    value: elem,
                  };
                })}
              ></Checkbox.Group>,
            )}
          </Form.Item>
          <Form.Item label="Tags">
            {getFieldDecorator('tags')(
              <Checkbox.Group
                onChange={this.handleChangeTags}
                options={shape.tags.map(elem => {
                  return {
                    label: elem,
                    value: elem,
                  };
                })}
              ></Checkbox.Group>,
            )}
          </Form.Item>
          <Form.Item label="Colors">
            {getFieldDecorator('colors')(
              <Checkbox.Group
                onChange={this.handleChangeTags}
                options={shape.colors.map(elem => {
                  return {
                    label: elem,
                    value: elem,
                  };
                })}
              ></Checkbox.Group>,
            )}
          </Form.Item>
        </Form>
      </StyledFilter>
    ) : null;
  }
}

Filter.propTypes = {
  filter: PropTypes.shape({
    _id: PropTypes.shape({
      $oid: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const WrappedFilter = Form.create({ name: 'filter' })(Filter);

export default WrappedFilter;
