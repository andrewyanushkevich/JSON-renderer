import React, { Component } from "react";

import { StyledItem, Title, Img, Rating, Price } from "./styles";

class Item extends Component {
  render() {
    const { item } = this.props;
    return item ? (
      <StyledItem>
        <Title>{item.title}</Title>
        <div>
          <div>
          <Img srcSet={item.images[0]}></Img>
          
        <Rating>Rating: {item.rating}</Rating>
          </div>
          <div>
          <p>{item.description}</p>
          <Price>Price: {item.price}$</Price>
          </div>
        </div>
      </StyledItem>
    ) : null;
  }
}

export default Item;
