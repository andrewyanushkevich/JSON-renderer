import React, { Component } from "react";

import { StyledItem, Title, Img } from './styles';

class Item extends Component {
  render() {
    const { item } = this.props;
    return item ? (
      <StyledItem>
        <Title>{item.title}</Title>
        <div>
          <Img srcSet={item.images[0]}></Img>
          <p>{item.description}</p>
        </div>
        <span>{item.price}</span>
        <span>{item.rating}</span>
      </StyledItem>
    ): null;
  }
}

export default Item;
