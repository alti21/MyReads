import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import AddButton from '../components/AddButton';
import { getAll } from '../api/BooksAPI';

const DisplayPage = () => {
  const SHELVES = [
    {
      title: 'Currently Reading',
      id: 'currentlyReading',
    },
    {
      title: 'Want To Read',
      id: 'wantToRead',
    },
    {
      title: 'Read',
      id: 'read',
    },
  ];
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  const reRender = () => {
    setReload(!reload);
  };

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
  }, [reload]); // this effect should run each time shelf type for a book is updated

  return (
    <div>
      <Header content="MyReads" className="App-header" headingLevel="h1" />
      {SHELVES.map((shelf) => (
        <Shelf
          key={shelf.id}
          data={data}
          shelf={shelf}
          reRender={() => reRender()}
        />
      ))}

      <NavLink to="/MyReads/search">
        <AddButton labelText="Search" />
      </NavLink>
    </div>
  );
};

export default DisplayPage;
