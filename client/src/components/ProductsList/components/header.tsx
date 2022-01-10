import React, { memo } from "react";
export const ProductListHeader = memo<{ name: string }>(({ name }) => {
  return (
    <div className={"header"}>
      <strong>{name}</strong>
      <input placeholder={"Search"} />
    </div>
  );
});
