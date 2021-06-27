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
    let unmounted = false;
    getAll().then((res) => {
      if (!unmounted && res.length > 0) {
        setData(res);
      } else if (!unmounted) setData([]);
    });
    return () => {
      unmounted = true;
    };
  });

  return (
    <>
      <Header
        content={shelfName}
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList data={data} shelfType={shelfType} />
    </>
  );
};

Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
};

export default Shelf;
