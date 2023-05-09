import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArr.push(action.payload);
    },
    removeBook: (state, action) => {
      const filteredBooks = state.booksArr.filter(
        ({ item_id }) => item_id !== action.payload,
      );
      return { ...state, booksArr: filteredBooks };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
