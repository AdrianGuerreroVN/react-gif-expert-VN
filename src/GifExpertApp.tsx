import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp: React.FC = () => {
  const [categories, setCategories] = useState(["Football"]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  //const apiKey = "PUTtiQ2I2oevYa8l9JXF7Ci3GpZMRRB7";
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        //onAddCategory={setCategories}></>
        onNewCategory={onAddCategory}
      />

      {categories.map((category, index) => {
        return <GifGrid key={category} category={category}></GifGrid>;
      })}
    </>
  );
};
