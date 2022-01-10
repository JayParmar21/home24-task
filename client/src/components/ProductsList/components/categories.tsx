import React, { memo } from "react";
import { Link } from "react-router-dom";

import { Category, ChildCategory } from "../../../types/types";
import { Loader } from "../../Loader";

export const ProductListCategories = memo<{ categories: Category[] }>(
  ({ categories }) => {
    return (
      <div className={"sidebar"}>
        <h3>Kategorien</h3>
        {categories.length ? (
          <ul>
            {categories.map(({ name, urlPath, childrenCategories }) => {
              return (
                <ProductListCategoy
                  name={name}
                  urlPath={urlPath}
                  key={urlPath}
                  childrenCategories={childrenCategories}
                />
              );
            })}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
);

const ProductListCategoy = memo<{
  name: string;
  urlPath: string;
  childrenCategories?: ChildCategory[];
}>(({ name, urlPath, childrenCategories }) => {
  return (
    <>
      <li>
        <Link to={`/${urlPath}`}>{name}</Link>
        <ul>
          {childrenCategories?.map(({ name, urlPath }) => {
            return (
              <ProductListCategoy name={name} urlPath={urlPath} key={urlPath} />
            );
          })}
        </ul>
      </li>
    </>
  );
});
