const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: { 
    type: Array, 
    required: true 
  },
  instructions: { 
    type: Array, 
    required: true 
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
