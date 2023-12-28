import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [
  {
    item_id: 'item1',
    title: 'WEB LAB FINAL',
    author: 'Fa20-bse-040',
    category: 'Afaq Ahmed'
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction'
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Science'
  }
];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ title, author, category }) => ({
        payload: {
          item_id: nanoid(),
          title,
          author,
          category,
        },
      }),
    },
    removeBook: (state, action) => {
      return state.filter(book => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
