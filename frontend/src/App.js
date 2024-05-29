import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import SingInPopup from "./components/SignInPopup";
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";
import "./styles/Accessibility.css";

function App() {
  const [isAccessibilityMode, setAccessibilityMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const toggleAccessibilityMode = () => {
    setAccessibilityMode(!isAccessibilityMode);
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

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
                    isAuthenticated ? <AddRecipePage /> : <SingInPopup />
                  }
                />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                  path="/user"
                  element={
                    isAuthenticated ? (
                      <UserPage setIsAuthenticated={setIsAuthenticated} />
                    ) : (
                      <div className="forms-page-container">
                        <div className="forms-container">
                          <Login setIsAuthenticated={setIsAuthenticated} />
                        </div>
                      </div>
                    )
                  }
                />
                <Route path="/user/register" element={<Register />} />
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
