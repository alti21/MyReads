import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ButtonDropDown from './ButtonDropDown';
import { update, get } from '../api/BooksAPI';

const Book = ({ book, reRender }) => {
  const choiceName = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want To Read',
    read: 'Read',
    none: 'None',
  };

  const [shelfType, setShelfType] = useState('None'); // useState is async so state is updated later
  const [currentBook, setCurrentBook] = useState({});
  const [curShelf, setCurShelf] = useState('None');

  const updateCurrentBookAndShelf = (currbook, currShelf) => {
    setShelfType(currShelf);
    setCurrentBook(currbook);
  };

  const isMounted = useRef(false); // use this if you don't want useEffect to run on initial render

  useEffect(() => {
    if (isMounted.current) {
      // prevents running on initial render
      update(currentBook, shelfType).then(() => {
        setCurShelf(shelfType);
        reRender();
      });
    } else {
      // this will fetch the current shelf of each book to update checkmarks on intial render
      get(book.id).then((res) => {
        setCurShelf(res.shelf);
      });
      isMounted.current = true;
    }
  }, [shelfType]);

  return (
    <div className="book">
      <img
        src={book.imageLinks !== undefined ? book.imageLinks.thumbnail : null}
        alt={book.title}
        className="book-thumbnail"
      />
      <ButtonDropDown
        choices={['currentlyReading', 'wantToRead', 'read', 'none']}
        onSelectChoice={(choice) => {
          // book is from the component's props
          // this function will be passed down to child
          updateCurrentBookAndShelf(book, choice);
        }}
        label="Move to..."
        currentShelf={curShelf}
        choiceName={choiceName}
        labelText="Choice Dropdown"
      />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors !== undefined
          ? book.authors.map((author, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>{author}</div>
            ))
          : null}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  reRender: PropTypes.func.isRequired,
};

export default Book;
