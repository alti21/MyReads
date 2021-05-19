import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <div>{book.title}</div>
    <div>{book.authors}</div>
    <img src={book.imageLinks.thumbnail} alt={book.title} />
  </div>
);

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf.isRequired,
};

export default Book;
