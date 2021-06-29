import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ data, shelfType, reRender }) => {
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
                reRender={() => reRender()}
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
                reRender={() => reRender()}
              />
            ) : null
          )
        : null}
    </div>
  );
};

BookList.propTypes = {
  shelfType: PropTypes.string,
  reRender: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  ).isRequired,
};

BookList.defaultProps = {
  shelfType: 'none',
  reRender: () => {},
};

export default BookList;
