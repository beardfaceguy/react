import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  // useEffect can be confusing, but also will apparently show up in interview questions, and is important to understand.
  // see react course, section 9, lecture 1:
  // https://www.udemy.com/course/react-redux/learn/lecture/34694868#questions/18832120
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  // second argument to useEffect works as follows:
  //   no argument:
  //     run the first argument function whenever any state changes
  //
  //   blank array:
  //     run the first argument function only on the initial render
  //
  //   array with one or more elements:
  //     run the first argument function whenever one of the array elements changes.  This can get tricky as useState
  //     creates new memory instances of the state variable, even though it has the same name.

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
