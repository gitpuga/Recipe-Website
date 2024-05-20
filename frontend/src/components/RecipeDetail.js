import React from 'react';

const RecipeDetail = ({ title, description, ingredients, instructions, imageUrl }) => {

  if (!title) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>{title}</h2>
      <img
        className='card-imageUrl' 
        src={imageUrl} 
        alt={title} 
      />
      <h3>Описание:</h3>
      <p>{description}</p>
      <h3>Ингредиенты:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Инструкции:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;