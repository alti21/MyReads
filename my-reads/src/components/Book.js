/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonDropDown from './ButtonDropDown';

const Book = ({ book, doSomethingWithBookAndShelf, shelf }) => {
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
        shelf={shelf}
      />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
// Move to..., currently reading, want to read, read, none

Book.propTypes = {
  // handleShelfTypeClick: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
  doSomethingWithBookAndShelf: PropTypes.func.isRequired,
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  //   thumbnail: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   authors: PropTypes.arrayOf(PropTypes.string),
};

export default Book;

// click on dropdown option, e.target.value would be a shelf (one of ["wantToRead", "currentlyReading", "read"])
