import React from "react";
import "./CollectionItem.scss";
import CostumButton from "../CostumButton/CostumButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cardActions/cardAction";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CostumButton onClick={() => dispatch(addItem(item))} inverted>
        ADD TO CART
      </CostumButton>
    </div>
  );
};

export default CollectionItem;
