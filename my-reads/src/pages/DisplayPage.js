import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import AddButton from '../components/AddButton';

const DisplayPage = () => {
  return (
    <div>
      <Header content="MyReads" className="App-header" headingLevel="h1" />
      <Shelf shelfName="Currently Reading" />
      <Shelf shelfName="Want To Read" />
      <Shelf shelfName="Read" />

      <NavLink to="/MyReads/search">
        <AddButton />
      </NavLink>
    </div>
  );
};

export default DisplayPage;
