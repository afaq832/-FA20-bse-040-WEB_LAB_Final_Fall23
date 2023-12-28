import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/booksSlice';
import './Book.css';


const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="book">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Category: {book.category}</p>
      </div>
      <div className="book-actions">
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Book;
