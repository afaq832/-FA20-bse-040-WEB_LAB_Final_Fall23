import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => <Book key={book.item_id} book={book} />)
      ) : (
        <p>No books available. Please add some books.</p>
      )}
    </div>
  );
};

export default BookList;
