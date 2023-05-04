import React from 'react';

const Book = ({ title, category, author }) => (
  <div className="flex flex-col my-4">
    <div className="text-base">{category}</div>
    <div className="text-2xl">{title}</div>
    <div className="text-lg">{author}</div>
    <div className="">
      <button type="button">Remove</button>
    </div>
  </div>
);

export default Book;
