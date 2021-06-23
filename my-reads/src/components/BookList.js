import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ data, shelf }) => {
  const toggleClass = (active) => {
    return active;
  };

  if (shelf === 'currentlyReading') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'currentlyReading' ? (
                <Book
                  book={book}
                  key={book.id}
                  // doSomethingWithBookAndShelf={doSomethingWithBookAndShelf}
                  // shelf={shelfType}
                  toggleDropDown={toggleClass}
                  // node={node}
                />
              ) : (
                ''
              )
            )
          : 'ok'}
      </div>
    );
  }
  if (shelf === 'wantToRead') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'wantToRead' ? (
                <Book
                  book={book}
                  key={book.id}
                  // doSomethingWithBookAndShelf={doSomethingWithBookAndShelf}
                  // shelf={shelfType}
                  toggleDropDown={toggleClass}
                  // node={node}
                />
              ) : (
                ''
              )
            )
          : 'ok'}
      </div>
    );
  }
  if (shelf === 'read') {
    return (
      <div className="book-list">
        {data !== []
          ? data.map((book) =>
              book.shelf === 'read' ? (
                <Book
                  book={book}
                  key={book.id}
                  // doSomethingWithBookAndShelf={doSomethingWithBookAndShelf}
                  // shelf={shelfType}
                  toggleDropDown={toggleClass}
                  // node={node}
                />
              ) : (
                ''
              )
            )
          : 'ok'}
      </div>
    );
  }
  return (
    <div className="book-list">
      {data !== []
        ? data.map((book) => (
            <Book
              book={book}
              key={book.id}
              // doSomethingWithBookAndShelf={doSomethingWithBookAndShelf}
              // shelf={shelfType}
              toggleDropDown={toggleClass}
              // node={node}
            />
          ))
        : 'ok'}
    </div>
  );
};

BookList.propTypes = {
  // shelf: PropTypes.string.isRequired,
  // doSomethingWithBookAndShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string,
  // toggleClass: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    })
  ).isRequired,
};

BookList.defaultProps = {
  shelf: 'none',
};

export default BookList;

/*
PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
allowAnonLogging: false

authors: Array [ "John Haugeland" ]

averageRating: 4.5

canonicalVolumeLink: "https://books.google.com/books/about/Artificial_Intelligence.html?hl=&id=zLFSPdIuqKsC"

categories: Array [ "Computers" ]

contentVersion: "0.0.1.0.preview.1"

description: "Presented in non-technical terms, this book explores the relationship between human thinking and machine computing"

id: "zLFSPdIuqKsC"

imageLinks: Object { smallThumbnail: "http://books.google.com/books/content?id=zLFSPdIuqKsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=zLFSPdIuqKsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" }

industryIdentifiers: Array [ {…}, {…} ]

infoLink: "http://books.google.com/books?id=zLFSPdIuqKsC&dq=artificial+intelligence&hl=&source=gbs_api"

language: "en"

maturityRating: "NOT_MATURE"

pageCount: 287

previewLink: "http://books.google.com/books?id=zLFSPdIuqKsC&printsec=frontcover&dq=artificial+intelligence&hl=&cd=2&source=gbs_api"

printType: "BOOK"

publishedDate: "1989-01-01"

publisher: "MIT Press"
ratingsCount: 2
readingModes: Object { text: false, image: true }
subtitle: "The Very Idea"
title: "Artificial Intelligence"



map: PropTypes.func.isRequired,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    id: PropTypes.string,
*/
