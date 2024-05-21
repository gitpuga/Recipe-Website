import React from "react";
import "../styles/RecipeDetail.css";

const RecipeDetail = ({
  title,
  description,
  ingredients,
  instructions,
  imageUrl,
}) => {
  if (!title) return <div>Загрузка...</div>;

  return (
    <div className="dCard-container">
      <div className="dCard">
        <h2 className="dCard-title">{title}</h2>
        <img className="dCard-img" src={imageUrl} alt={title} />
        <div className="dCard-description-block">
          <h3 className="dCard-titles">Описание:</h3>
          <p className="dCard-description">{description}</p>
        </div>
        <hr className="dCard-divider" />
        <h3 className="dCard-titles">Ингредиенты:</h3>
        <ul className="dCard-list">
          {ingredients.map((ingredient, index) => (
            <li className="dCard-list-text" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <hr className="dCard-divider" />
        <h3 className="dCard-titles">Инструкции:</h3>
        <ol className="dCard-list">
          {instructions.map((instruction, index) => (
            <li className="dCard-list-text" key={index}>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
