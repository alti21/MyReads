import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ data, shelfType, setShelfType }) => {
  const toggleClass = (active) => {
    return active;
  };
  if (shelfType === 'none') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) => (
              <Book
                book={book}
                key={book.id}
                toggleDropDown={toggleClass}
                setShelf={setShelfType}
              />
            ))
          : null}
      </div>
    );
  }
  return (
    <div className="book-list">
      {data !== []
        ? data.map((book) =>
            book.shelf === shelfType ? (
              <Book
                book={book}
                key={book.id}
                toggleDropDown={toggleClass}
                setShelf={(shelf) => setShelfType(shelf)}
              />
            ) : null
          )
        : null}
    </div>
  );

  /*
  if (shelfType === 'currentlyReading') {
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
  if (shelfType === 'wantToRead') {
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
  if (shelfType === 'read') {
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
  */
};

BookList.propTypes = {
  shelfType: PropTypes.string,
  setShelfType: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  ).isRequired,
};

BookList.defaultProps = {
  shelfType: 'none',
};

export default BookList;
