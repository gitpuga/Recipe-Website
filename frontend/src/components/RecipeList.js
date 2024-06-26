import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipes } from "../utils/api";
import "../styles/RecipeList.css";

const RecipeList = ({ searchTerm, ingredientFilter, difficultyFilter }) => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();

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
      recipes.filter((recipe) => {
        const titleMatch = recipe.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const ingredientMatch = recipe.ingredients
          .join(", ")
          .toLowerCase()
          .includes(ingredientFilter.toLowerCase());

        let difficultyMatch = true;
        if (difficultyFilter) {
          const steps = recipe.instructions.length;
          switch (difficultyFilter) {
            case "easy":
              difficultyMatch = steps <= 4;
              break;
            case "medium":
              difficultyMatch = steps > 4 && steps <= 6;
              break;
            case "hard":
              difficultyMatch = steps > 6;
              break;
            default:
              difficultyMatch = true;
          }
        }

        return titleMatch && ingredientMatch && difficultyMatch;
      })
    );
  }, [searchTerm, ingredientFilter, difficultyFilter, recipes]);

  const handleCardClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="recipe-list-container">
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div
            className="card"
            onClick={() => handleCardClick(recipe._id)}
            key={recipe._id}
          >
            <hr className="card-divider" />
            <div className="card-text-container">
              <p className="card-title">{recipe.title}</p>
              <p className="card-description">{recipe.description}</p>
            </div>
            <hr className="card-divider" />
            <img
              className="card-image"
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
