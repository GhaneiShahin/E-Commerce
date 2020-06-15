import React, { Component } from "react";
import { shopData } from "./shopData";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

export class Shop extends Component {
  state = {
    collections: shopData,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <PreviewCollection key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
