import React from 'react';
import books from '../data/books';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => (
  <div className="container px-1 md:px-12 flex flex-col">
    {books.map(({ title, category, author }, i) => (
      <Book key={i} title={title} category={category} author={author} />
    ))}

    <AddBookForm />
  </div>
);

export default Books;
