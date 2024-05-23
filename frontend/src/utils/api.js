const API_URL = "http://localhost:5000/api";

export const register = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  return data;
};

export const getAllRecipes = async () => {
  const response = await fetch(`${API_URL}/recipes/get_all`);
  return response.json();
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${API_URL}/recipes/${id}`);
  return response.json();
};

export const addRecipe = async (recipe) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/recipes/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(recipe),
  });
  return response.json();
};
