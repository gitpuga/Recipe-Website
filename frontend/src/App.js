import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipePage from "./pages/RecipePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/App.css";
import "./styles/Accessibility.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAccessibilityMode, setAccessibilityMode] = useState(false);

  const toggleAccessibilityMode = () => {
    setAccessibilityMode(!isAccessibilityMode);
  };

  return (
    <div className={isAccessibilityMode ? "app accessibility-mode" : "app"}>
      <Router>
        <div className="App">
          <Header onSearch={setSearchTerm} />
          <div className="content">
            <main>
              <Routes>
                <Route
                  path="/"
                  element={<HomePage searchTerm={searchTerm} />}
                />
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
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
