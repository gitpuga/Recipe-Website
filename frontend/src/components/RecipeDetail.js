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
    <div className="details-container">
      <div className="detail-card">
        <hr className="detail-card-divider" />
        <h2 className="detail-card-title">{title}</h2>
        <img className="detail-card-img" src={imageUrl} alt={title} />
        <h3 className="detail-card-description-title">Описание:</h3>
        <p className="detail-card-description">{description}</p>
        <hr className="detail-card-divider" />
      </div>
      <div className="detail-card">
        <hr className="detail-card-divider" />
        <h3 className="detail-card-titles">Ингредиенты:</h3>
        <hr className="detail-card-divider" />
        <ul className="detail-card-list">
          {ingredients.map((ingredient, index) => (
            <li className="detail-card-list-text" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="detail-card">
        <hr className="detail-card-divider" />
        <h3 className="detail-card-titles">Инструкции:</h3>
        <hr className="detail-card-divider" />
        <ol className="detail-card-list">
          {instructions.map((instruction, index) => (
            <li className="detail-card-list-text" key={index}>
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
