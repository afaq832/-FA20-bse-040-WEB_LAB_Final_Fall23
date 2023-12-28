import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <span class="span"> BOOKstore CMS</span>
      <Link to="/books" class='abc'>Books</Link>
      <Link to="/categories" class="abcd">Categories</Link>
    </nav>
  );
};

export default Navigation;
