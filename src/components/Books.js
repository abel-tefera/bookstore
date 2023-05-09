import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import books from '../data/books';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books.booksArr);
  return (
    <div className="container px-1 md:px-12 flex flex-col">
      {books.map(({
        item_id, title, category, author,
      }, i) => (
        <Book key={i} item_id={item_id} title={title} category={category} author={author} />
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
