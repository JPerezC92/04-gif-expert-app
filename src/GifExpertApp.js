import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import CategoriesGrid from "./components/CategoriesGrid";
import "./GifExpertApp.css";

const GifExpertApp = ({ defaultCategories = ["cat"] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <header className="header">
        <h1 className="header__title">GifExpertApp</h1>

        <AddCategory setCategories={setCategories} />
      </header>

      <hr />

      <main className="main">
        <ul className="categories__grid">
          {categories
            .map((category, index) => (
              <CategoriesGrid key={category + index} category={category} />
            ))
            .reverse()}
        </ul>
      </main>
    </>
  );
};

export default GifExpertApp;
