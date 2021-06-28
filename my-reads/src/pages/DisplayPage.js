import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import AddButton from '../components/AddButton';
import { getAll } from '../api/BooksAPI';

const DisplayPage = () => {
  // const SHELVES = [
  //   {
  //     title: 'Currently Reading',
  //     id: 'currentlyReading',
  //   },
  //   {
  //     title: 'Want To Read',
  //     id: 'wantToRead',
  //   },
  //   {
  //     title: 'Read',
  //     id: 'read',
  //   },
  // ];
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [shelfType, setShelfType] = useState('None');

  useEffect(() => {
    let unmounted = false;
    getAll().then((res) => {
      if (!unmounted && res.length > 0) {
        console.log(res);
        setData(res);
      } else if (!unmounted) setData([]);
    });
    return () => {
      unmounted = true;
    };
  }, [shelfType]); // this effect should run each time shelf type for a book is updated

  const updateShelf = (shelf) => {
    console.log('test');
    setShelfType(shelf);
  };

  return (
    <div>
      <Header content="MyReads" className="App-header" headingLevel="h1" />
      <Shelf
        data={data}
        shelfName="Currently Reading"
        setShelfType={(shelf) => updateShelf(shelf)}
      />
      <Shelf data={data} shelfName="Want To Read" />
      <Shelf data={data} shelfName="Read" />

      <NavLink to="/MyReads/search">
        <AddButton />
      </NavLink>
    </div>
  );
};

export default DisplayPage;
