import React, { useEffect } from 'react';
import Header from './Header';
import { getAll } from '../api/BooksAPI';
// import Book from './Book';

const Shelf = () => {
  useEffect(() => {
    getAll().then((res) => console.log(res)); // if res.shelf === currentlyReading
  }, []);

  return (
    <>
      <Header
        content="Currently Reading"
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
    </>
  );
};

export default Shelf;
