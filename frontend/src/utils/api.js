const API_URL = 'http://localhost:5000/api/recipes';

export const getAllRecipes = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const addRecipe = async (recipe) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  });
  return response.json();
};