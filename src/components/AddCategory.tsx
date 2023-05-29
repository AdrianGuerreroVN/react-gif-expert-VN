import React, { useState } from "react";

interface AddCategoryProps {
  onNewCategory: (word: any) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = (event: any) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    props.onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChanged(event)}
      ></input>
    </form>
  );
};
