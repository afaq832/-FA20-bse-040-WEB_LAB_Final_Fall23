import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Ensure this is the only time 'store' is imported/declared
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
