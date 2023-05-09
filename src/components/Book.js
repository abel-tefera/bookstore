import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

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
        <Button type="button" onClick={() => dispatch(removeBook(item_id))} title="Remove" />
      </div>
    </div>
  );
};

export default Book;
