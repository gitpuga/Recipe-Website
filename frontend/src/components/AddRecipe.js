import React, { useState } from "react";
import { addRecipe } from "../utils/api";
import "../styles/AddRecipe.css";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title,
      description,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split(",").map((item) => item.trim()),
      imageUrl,
    };

    const response = await addRecipe(recipe);
    if (response.error) {
      setError(response.error);
    } else {
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setImageUrl("");
      setError("Рецепт добавлен успешно");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">Название:</label>
      <input
        className="form-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="form-label">Описание:</label>
      <input
        className="form-input"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label className="form-label">Ингредиенты (разделите запятыми):</label>
      <textarea
        className="form-textarea"
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <label className="form-label">Инструкции (разделите запятыми):</label>
      <textarea
        className="form-textarea"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <label className="form-label">Ссылка на изображение:</label>
      <input
        value={imageUrl}
        className="form-input"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit" className="form-button">
        Добавить
      </button>
    </form>
  );
};

export default AddRecipe;
