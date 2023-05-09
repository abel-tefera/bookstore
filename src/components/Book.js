import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  item_id, title, category, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col my-4">
      <div className="text-base">{category}</div>
      <div className="text-2xl">{title}</div>
      <div className="text-lg">{author}</div>
      <div className="">
        <button type="button" onClick={() => dispatch(removeBook(item_id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Book;
