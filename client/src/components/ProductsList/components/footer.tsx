import React, { memo } from "react";

export const ProductListFooter = memo(() => {
  return (
    <div className={"footer"}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
      Versandkosten.
    </div>
  );
});
