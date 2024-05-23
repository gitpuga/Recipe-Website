import React, { useState } from "react";
import "../styles/HomePage.css";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

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
    <div className="homepage-container">
      <div className="search-filter-container">
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
        <RecipeList
          searchTerm={searchTerm}
          ingredientFilter={ingredientFilter}
          difficultyFilter={difficultyFilter}
        />
      </div>
    </div>
  );
};

export default HomePage;
