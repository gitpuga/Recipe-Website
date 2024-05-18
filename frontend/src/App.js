import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipePage from './pages/RecipePage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-recipe" element={<AddRecipePage />} />
              <Route path="/recipes/:id" element={<RecipePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;