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
    type: String, 
    required: true 
  },
  instructions: { 
    type: String, 
    required: true 
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
