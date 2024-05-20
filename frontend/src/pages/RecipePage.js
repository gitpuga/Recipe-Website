import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../utils/api';
import RecipeDetail from '../components/RecipeDetail';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipeById(id);
      setRecipe(recipeData);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
      return <h2>Рецепт не найден</h2>;
  }

  return <RecipeDetail {...recipe} />;
};

export default RecipePage;