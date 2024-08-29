import { createContext, useState } from 'react';
import axios from 'axios';
const jsonServerAddress = 'http://localhost:3001/books';
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(jsonServerAddress);

    setBooks(response.data);
  };

  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`${jsonServerAddress}/${id}`, {
      title: newTitle,
    });
    const editedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editedBooks);
  };

  const deleteBookByID = async (id) => {
    await axios.delete(`${jsonServerAddress}/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post(jsonServerAddress, { title });

    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
  };
  const valueToShare = {
    books,
    deleteBookByID,
    editBookByID,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
