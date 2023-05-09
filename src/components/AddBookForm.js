import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: Date.now(),
        author,
        title,
        category: 'Classic',
      }),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col">
      <div className="text-xl">Add New Book</div>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default AddBookForm;
