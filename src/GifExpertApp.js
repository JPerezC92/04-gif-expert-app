import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category + index} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
