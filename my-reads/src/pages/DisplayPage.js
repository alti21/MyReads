import React from 'react';
import Header from '../components/Header';
import Shelf from '../components/Shelf';

const DisplayPage = () => {
  return (
    <div>
      <Header content="MyReads" className="App-header" headingLevel="h1" />
      <Shelf shelfType="currentlyReading" />
    </div>
  );
};

export default DisplayPage;
