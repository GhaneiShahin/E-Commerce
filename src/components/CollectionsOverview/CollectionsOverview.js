import React, { memo } from "react";
import "./CollectionsOverview.scss";
import { useSelector } from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { selectCollectionsForPreview } from "../../store/shopSelector";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <PreviewCollection key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

export default memo(CollectionsOverview);
