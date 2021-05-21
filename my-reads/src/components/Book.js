import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, authors, thumbnail }) => (
  <div className="book">
    <img src={thumbnail} alt={title} className="book-thumbnail" />
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>
);

Book.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
};

Book.defaultProps = {
  authors: [],
};

export default Book;
