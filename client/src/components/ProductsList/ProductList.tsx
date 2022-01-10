import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Category } from "../../types/types";
import { ProductListCategories } from "./components/categories";
import { ProductListFooter } from "./components/footer";
import { ProductListHeader } from "./components/header";
import { getCatigories } from "./ProductList.gql";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductListContent = lazy(() => import("./components/content")),
  ProductListAtricles = lazy(() => import("./components/articles"));

const ArticleList = () => {
  const [categories, setCategories] = useState<Category[]>([]),
    [current, setCurrent] = useState<string>("");

  const navigate = useNavigate(),
    location = useLocation();

  /** Get server data (this logic should work differently (read NOTES)) */
  useEffect(() => {
    getCatigories(setCategories);
  }, []);

  /** Get location for update articles */
  useEffect(() => {
    setCurrent(location.pathname.substring(1));
  }, [location]);

  /** Get the first category as current after loading the categories  */
  useEffect(() => {
    if (!current && categories.length) {
      setCurrent(categories[0].urlPath);
      navigate(categories[0].urlPath);
    }
  }, [categories, current, navigate]);

  /** Get the current category */
  const currentCategoty = useMemo(
    () =>
      categories?.find(
        (d) =>
          d.urlPath === current ||
          d.childrenCategories?.find((c) => c.urlPath === current)
      ),
    [categories, current]
  );

  /** Get current articles (TODO add filter for childrenCategories (read NOTES)) */
  const articles = useMemo(
    () => currentCategoty?.categoryArticles.articles ?? [],
    [currentCategoty]
  );

  return (
    <div className={"page"}>
      <ProductListHeader name="home24" />
      <ProductListCategories categories={categories} />
      <Suspense fallback={null}>
        <ProductListContent currentCategoty={currentCategoty}>
          <ProductListAtricles articles={articles} />
        </ProductListContent>
      </Suspense>

      <ProductListFooter />
    </div>
  );
};

export default ArticleList;
