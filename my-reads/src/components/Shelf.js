import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import { getAll } from '../api/BooksAPI';
import BookList from './BookList';

const Shelf = ({ data, shelf, reRender }) => {
  return (
    <>
      <Header
        content={shelf.title}
        className="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList data={data} shelfType={shelf.id} reRender={() => reRender()} />
    </>
  );
};

Shelf.propTypes = {
  shelf: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  reRender: PropTypes.func.isRequired,
};

export default Shelf;
