import React from "react";
import books from "../data/books";
import Book from "./Book";

const Books = () => {
  return (
    <div className="container px-1 md:px-12 flex flex-col">
      {books.map(({ title, category, author }) => (
        <Book title={title} category={category} author={author}></Book>
      ))}
      <form className="flex flex-col">
        <div className="text-xl">Add New Book</div>
        <div className="flex flex-row">
          <input type="text" placeholder="Book Title" />
          <input type="text" placeholder="Author" />
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default Books;
