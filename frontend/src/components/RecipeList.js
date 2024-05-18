import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../utils/api';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getAllRecipes();
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Рецепты:</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
