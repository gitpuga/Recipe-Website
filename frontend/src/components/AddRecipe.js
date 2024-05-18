import React, { useState } from 'react';
import { addRecipe } from '../utils/api';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      title,
      ingredients: ingredients.split(','),
      instructions,
    };

    await addRecipe(recipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Ингредиенты:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label>Инструкции:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddRecipe;