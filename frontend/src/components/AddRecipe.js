import React, { useState } from "react";
import { addRecipe } from "../utils/api";
import "../styles/AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title,
      description,
      ingredients: ingredients.split(","),
      instructions: ingredients.split(","),
      imageUrl,
    };

    await addRecipe(recipe);
    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("");
    setImageUrl("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Название:</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Описание:</label>
        <input
          className="form-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Ингредиенты:</label>
        <textarea
          className="form-textarea"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Инструкции:</label>
        <textarea
          className="form-textarea"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Ссылка на изображение:</label>
        <input
          value={imageUrl}
          className="form-input"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit" className="form-button">
        Добавить
      </button>
    </form>
  );
};

export default AddRecipe;
