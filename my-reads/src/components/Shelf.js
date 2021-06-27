import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getAll } from '../api/BooksAPI';
import BookList from './BookList';

const Shelf = ({ shelfName }) => {
  const [data, setData] = useState([]);

  let shelfType = '';
  if (shelfName === 'Currently Reading') shelfType = 'currentlyReading';
  else if (shelfName === 'Want To Read') shelfType = 'wantToRead';
  else if (shelfName === 'Read') shelfType = 'read';

  useEffect(() => {
    getAll().then((res) => {
      if (res.length > 0) {
        setData(res);
      } else setData([]);
    });
  });

  return (
    <>
      <Header
        content={shelfName}
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList data={data} shelf={shelfType} />
    </>
  );
};

Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
};

export default Shelf;
