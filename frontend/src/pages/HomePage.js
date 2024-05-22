import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipes } from "../utils/api";
import "../styles/HomePage.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

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

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setIngredientFilter(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficultyFilter(event.target.value);
  };

  return (
    <div className="recipe-list-container">
      <h2 className="h2-recipe-list">Рецепты:</h2>
      <input
        className="recipe-list-search"
        type="text"
        placeholder="Поиск 🔍"
        value={searchTerm}
        onChange={handleSearchChange}
        required
      />
      <div className="recipe-list-filter-container">
        <select
          className="recipe-list-filter"
          value={difficultyFilter}
          onChange={handleDifficultyChange}
        >
          <option className="recipe-list-option" value="">
            Все сложности
          </option>
          <option className="recipe-list-option" value="easy">
            Легкий
          </option>
          <option className="recipe-list-option" value="medium">
            Средний
          </option>
          <option className="recipe-list-option" value="hard">
            Сложный
          </option>
        </select>
        <input
          className="recipe-list-filter"
          type="text"
          placeholder="Ингредиенты"
          value={ingredientFilter}
          onChange={handleIngredientChange}
        />
      </div>
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
            <div className="card-image-container">
              <img
                className="card-image"
                src={recipe.imageUrl}
                alt={recipe.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
