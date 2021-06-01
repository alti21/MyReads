import React from 'react';
import PropTypes from 'prop-types';
import ButtonDropDown from './ButtonDropDown';

const Book = ({ title, authors, thumbnail }) => {
  return (
    <div className="book">
      <img src={thumbnail} alt={title} className="book-thumbnail" />
      <ButtonDropDown
        choices={['Currently Reading', 'Want to Read', 'Read', 'None']}
      />
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};
// Move to..., currently reading, want to read, read, none

Book.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
};

Book.defaultProps = {
  authors: [],
};

export default Book;
