import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const jsonServerAddress = 'http://localhost:3001/books';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(jsonServerAddress);

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
    const response = await axios.delete(`${jsonServerAddress}/${id}`);
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

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
