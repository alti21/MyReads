import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, authors, thumbnail }) => (
  <div>
    <img src={thumbnail} alt={title} />
    <div>{title}</div>
    <div>{authors}</div>
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
