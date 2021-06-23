import React, { useState, useEffect } from 'react';
import Header from './Header';
import { getAll } from '../api/BooksAPI';
import BookList from './BookList';

const Shelf = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      if (res.length > 0) {
        // console.log(res);
        setData(res);
      } else setData([]);
    });
    // getAll().then((res) => console.log(res)); // if res.shelf === currentlyReading
  }, []);

  return (
    <>
      {console.log(data)}
      <Header
        content="Currently Reading"
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList data={data} shelf="currentlyReading" />
      <Header
        content="Want To Read"
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList data={data} shelf="wantToRead" />
      <Header content="Read" headingClass="shelf-header" headingLevel="h2" />
      <hr />
      <BookList data={data} shelf="read" />
    </>
  );
};

export default Shelf;
