import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../utils/api';
import '../styles/RecipeList.css';

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
      <h2 className='h2-recipe-list'>Рецепты:</h2>
      <div className='recipe-list'>
        {recipes.map((recipe) => (
          <Link className="a-card" to="/recipe:{id}">
            <div className='card'>
              <p className='card-title' key={recipe._id}>{recipe.title}</p>
              <p className='card-description' key={recipe._id}>{recipe.description}</p>
              <img className='card-imageUrl' src={recipe.imageUrl} alt={recipe.title} key={recipe._id}></img>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
