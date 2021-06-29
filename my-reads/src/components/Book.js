import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    let unmounted = false;
    update(currentBook, shelfType).then(() => {
      get(book.id).then((res2) => {
        if (!unmounted) {
          setCurShelf(res2.shelf);
          reRender();
        }
      });
    });
    return () => {
      unmounted = true;
    };
  }, [shelfType]);

  return (
    <div className="book">
      <img
        src={book.imageLinks.thumbnail}
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
        shelf={shelfType}
        currentShelf={curShelf}
        choiceName={choiceName}
      />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.map((author, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{author}</div>
        ))}
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
