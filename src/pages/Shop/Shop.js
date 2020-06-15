import React, { useState } from "react";
import { shopData } from "./shopData";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const Shop = () => {
  const [collections] = useState(shopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <PreviewCollection key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

export default Shop;
