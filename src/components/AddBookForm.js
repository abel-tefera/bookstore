import React from 'react';

const AddBookForm = () => (
  <form className="flex flex-col">
    <div className="text-xl">Add New Book</div>
    <div className="flex flex-row">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </div>
  </form>
);

export default AddBookForm;
