import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllRecipes } from '../utils/api';
import '../styles/RecipeList.css';

const RecipeList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getAllRecipes();
      setRecipes(recipesData);
      setFilteredRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipes(
      recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, recipes]);

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <h2 className='h2-recipe-list'>Рецепты:</h2>
      <div className='recipe-list'>
        {filteredRecipes.map((recipe) => (
          <div className='card' onClick={() => handleCardClick(recipe._id)} key={recipe._id}>
            <p className='card-title'>{recipe.title}</p>
            <p className='card-description'>{recipe.description}</p>
            <img 
              className='card-imageUrl' 
              src={recipe.imageUrl} 
              alt={recipe.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
