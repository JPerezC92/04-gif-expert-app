import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddCategory.css";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((state) => [...state, inputValue]);
      setInputValue("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form__inputValue">{inputValue}</p>
      &nbsp;
      <input
        className="form__input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Exp. "cat"'
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
