/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonDropDown from './ButtonDropDown';
import { update, getAll } from '../api/BooksAPI';

const Book = ({ book }) => {
  const [shelfType, setShelfType] = useState('None'); // useState is async so state is updated later
  const [currentBook, setCurrentBook] = useState({});

  const doSomethingWithBookAndShelf = (currbook, currShelf) => {
    setShelfType(currShelf);
    setCurrentBook(currbook);
  };

  useEffect(() => {
    update(currentBook, shelfType).then((res) => console.log(res));
    getAll().then((res) => console.log(res));
    console.log(`${shelfType} and ${currentBook.id}`);
  }, [shelfType]);

  return (
    <div className="book">
      <img
        src={book.imageLinks.thumbnail}
        alt={book.title}
        className="book-thumbnail"
      />
      <ButtonDropDown
        choices={['currentlyReading', 'wantToRead', 'read', 'none']}
        onSelectChoice={(choice) => {
          // book came from the component props
          doSomethingWithBookAndShelf(book, choice);
        }}
        shelf={shelfType}
        // node={node}
      />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
// Move to..., currently reading, want to read, read, none

Book.propTypes = {
  // shelf: PropTypes.string.isRequired,
  // doSomethingWithBookAndShelf: PropTypes.func.isRequired,
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Book;

// click on dropdown option, e.target.value would be a shelf (one of ["wantToRead", "currentlyReading", "read"])
