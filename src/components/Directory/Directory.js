import React, { memo } from "react";
import MenuItems from "../MenuItems/MenuItems";
import "./Directory.scss";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector((state) => state.directory.section);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItems key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default memo(Directory);
