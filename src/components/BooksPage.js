import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book'; 
import AddBookForm from './AddBookForm'; 

const BooksPage = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map(book => (
        <Book key={book.item_id} book={book} />
      ))}
      <AddBookForm /> 
    </div>
  );
};

export default BooksPage;
