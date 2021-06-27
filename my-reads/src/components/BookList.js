import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ data, shelf }) => {
  const toggleClass = (active) => {
    return active;
  };

  if (shelf === 'currentlyReading') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'currentlyReading' ? (
                <Book book={book} key={book.id} toggleDropDown={toggleClass} />
              ) : (
                ''
              )
            )
          : ''}
      </div>
    );
  }
  if (shelf === 'wantToRead') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'wantToRead' ? (
                <Book book={book} key={book.id} toggleDropDown={toggleClass} />
              ) : (
                ''
              )
            )
          : ''}
      </div>
    );
  }
  if (shelf === 'read') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'read' ? (
                <Book book={book} key={book.id} toggleDropDown={toggleClass} />
              ) : (
                ''
              )
            )
          : ''}
      </div>
    );
  }
  return (
    <div className="book-list">
      {data !== []
        ? data.map((book) => (
            <Book book={book} key={book.id} toggleDropDown={toggleClass} />
          ))
        : ''}
    </div>
  );
};

BookList.propTypes = {
  shelf: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  ).isRequired,
};

BookList.defaultProps = {
  shelf: 'none',
};

export default BookList;
