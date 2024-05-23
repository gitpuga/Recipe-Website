import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import RecipeList from "./components/RecipeList";
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";
import "./styles/Accessibility.css";


function App() {
  const [isAccessibilityMode, setAccessibilityMode] = useState(false);
  const [searchTerm] = useState("");
  const [ingredientFilter] = useState("");
  const [difficultyFilter] = useState("");
  const [user, setUser] = useState(null);

  const toggleAccessibilityMode = () => {
    setAccessibilityMode(!isAccessibilityMode);
  };

  const handleLogin = (token) => {
    setUser(token);
  };

  return (
    <div className={isAccessibilityMode ? "app accessibility-mode" : "app"}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/add-recipe"
                  element={
                    user ? <AddRecipePage /> : <Login onLogin={handleLogin} />
                  }
                />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                  path="/user"
                  element={
                    user ? (
                      <RecipeList
                        searchTerm={searchTerm}
                        ingredientFilter={ingredientFilter}
                        difficultyFilter={difficultyFilter}
                      />
                    ) : (
                      <div>
                        <Register />
                        <Login onLogin={handleLogin} />
                      </div>
                    )
                  }
                />
              </Routes>
            </main>
          </div>
          <Footer toggleAccessibilityMode={toggleAccessibilityMode} />
        </div>
      </Router>
    </div>
  );
}

export default App;
