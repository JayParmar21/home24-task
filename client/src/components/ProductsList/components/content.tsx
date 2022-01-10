import React, { memo } from "react";
import { Category } from "../../../types/types";
import { Loader } from "../../Loader";

export const ProductListContent = memo<{
  currentCategoty?: Category;
  children?: JSX.Element | JSX.Element[];
}>(({ currentCategoty, children }) => {
  return (
    <div className={"content"}>
      {!!currentCategoty ? (
        <h1>
          {currentCategoty.name}
          <small> ({currentCategoty.articleCount})</small>
        </h1>
      ) : (
        <Loader />
      )}
      {children}
    </div>
  );
});

export default ProductListContent;
