import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login"
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import "./styles/App.css";
import "./styles/Accessibility.css";

function App() {
  const [isAccessibilityMode, setAccessibilityMode] = useState(false);
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
                <Route
                  path="/"
                  element={<HomePage />}
                />
                <Route 
                  path="/add-recipe" 
                  element={user ? <AddRecipePage /> : <Login onLogin={handleLogin} />} 
                />
                <Route 
                  path="/recipe/:id" 
                  element={<RecipePage />} 
                />
                <Route 
                  path="/contact" 
                  element={<ContactPage />} 
                />
                <Route 
                  path="*" 
                  element={<NotFoundPage />} 
                />
                <Route 
                  path="/user" 
                  element={<UserPage />} 
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
