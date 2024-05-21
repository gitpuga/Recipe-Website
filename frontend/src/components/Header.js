import { React, useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import "../styles/Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="header-left-container">
        <nav className="header-nav">
          <Link className="a" to="/">
            <h1 className="header-text">🍽️ CookBook</h1>
          </Link>
        </nav>
        <div className="header-divider" />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            overflow: "hidden",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="поиск"
            inputProps={{ "aria-label": "поиск" }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Paper>
      </div>
      <nav className="header-nav">
        <div className="nav-container">
          <Link className="a" to="/add-recipe">
            <h1 className="header-text">добавить рецепт</h1>
          </Link>
        </div>
        <div className="nav-container">
          <Link className="a" to="/contact">
            <h1 className="header-text">контакты</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
