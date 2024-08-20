/*
  Handling user inputs (text, radio buttons, etc.)
   do in the following order
    1.  Create new piece of state (as below, const [term, setTerm] = useState(''))
    2. Create an event handler to watch for the 'onChange' event
    3.  When the 'onChange' event fires, get the value from the input
    4.  Take that valeu from the input and use it to update your state
    5.  Pass your state to the input as the value prop


  Why do we use States?

    So we can manage the text input using the state system

    Need to know what the search term is?
      Reference the 'term' variable

    Need to change the search term?
      call 'setTerm('asdfasdf')'

    Input managed in this style are called "controlled inputs"
*/
import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
  //wrapping an input in form will cause the browser to trigger a submit event when hitting Enter key in the input
  const handleFormSubmit = (event) => {
    // without passing the vent argument above and calling preventDefault below, upon submitting,
    // the form will reload, wiping out any data on the screeen
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
