import React, { Component } from "react";
import { Form, InputNumber, Checkbox, Select, Radio, Button } from "antd";

import { SIZES, TAGS, COLORS } from "../../constants";
import { StyledFilter } from "./styles";

class Filter extends Component {
  handleSubmit = e => {
    const { filter } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        filter(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledFilter>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <Form.Item label="Price" labelAlign="right">
            <span>from</span>
            {getFieldDecorator("minPrice")(<InputNumber min={0} />)}
            <span>to</span>
            {getFieldDecorator("maxPrice")(<InputNumber min={0} />)}
          </Form.Item>
          <Form.Item label="Rating" labelAlign="right">
            <span>from</span>
            {getFieldDecorator("minRating")(
              <InputNumber min={0} max={5} step={0.5} />
            )}
            <span>to</span>
            {getFieldDecorator("maxRating")(
              <InputNumber min={0} max={5} step={0.5} />
            )}
          </Form.Item>
          <Form.Item label="Sizes">
            {getFieldDecorator("sizes")(
              <Checkbox.Group
                options={SIZES.map(elem => {
                  return { label: elem, value: elem };
                })}
              ></Checkbox.Group>
            )}
          </Form.Item>
          <Form.Item label="Tags">
            {getFieldDecorator("tags")(
              <Select mode="tags">
                {TAGS.map(elem => {
                  return <Select.Option key={elem}>{elem}</Select.Option>;
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Colors">
            {getFieldDecorator("colors")(
              <Select mode="tags">
                {COLORS.map(elem => {
                  return <Select.Option key={elem}>{elem}</Select.Option>;
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item label="Price sort">
            {getFieldDecorator("priceSort")(
              <Radio.Group name="sort">
                <Radio value="decreasing">decreasing</Radio>
                <Radio value="increasing">increasing</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="Rating sort">
            {getFieldDecorator("ratingSort")(
              <Radio.Group name="sort">
                <Radio value="decreasing">decreasing</Radio>
                <Radio value="increasing">increasing</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filter
            </Button>
          </Form.Item>
        </Form>
      </StyledFilter>
    );
  }
}

const WrappedFilter = Form.create({ name: "coordinated" })(Filter);

export default WrappedFilter;
