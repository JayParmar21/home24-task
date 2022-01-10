import React, { memo } from "react";
import { Article } from "../../../types/types";
import { formatter } from "../../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProductListAtricles = memo<{ articles?: Article[] }>(
  ({ articles }) => {
    return (
      <div className={"articles"}>
        {articles?.map((article) => {
          return (
            <ArticleCard
              {...article}
              key={article.name + article.variantName}
            />
          );
        })}
      </div>
    );
  }
);

export default ProductListAtricles;

export const ArticleCard = memo((article: Article) => {
  return (
    <div className={"article"}>
      <LazyLoadImage src={article.images[0].path} alt="" loading="lazy" />
      <div className={"desc"}>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
});
