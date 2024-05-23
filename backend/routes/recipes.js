const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// Получение всех рецептов
router.get("/get_all", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Добавление нового рецепта
router.post("/add", async (req, res) => {
  const { title, description, ingredients, instructions, imageUrl } = req.body;
  const recipe = new Recipe({
    title,
    description,
    ingredients,
    instructions,
    imageUrl,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Получение рецепта по ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Рецепт не найден" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Экспорт маршрутов
module.exports = router;