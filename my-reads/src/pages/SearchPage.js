import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import SearchBar from '../components/SearchBar';
import { search } from '../api/BooksAPI';
// import Book from '../components/Book';
import BookList from '../components/BookList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  // const toggleClass = (active) => {
  //   return active;
  // };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const bookSearch = setTimeout(() => {
      if (query.length > 0) {
        search(query).then((res) => {
          if (res.length > 0) {
            setData(res);
          } else setData([]);
        });
      } else {
        setData([]); // make sure data is not undefined
      }
    }, 1000);
    return () => clearTimeout(bookSearch);
  }, [query]);

  // const [shelfType, setShelfType] = useState('None'); // useState is async so state is updated later
  // const [currentBook, setCurrentBook] = useState({});

  // const doSomethingWithBookAndShelf = (book, shelf) => {
  //   setShelfType(shelf);
  //   setCurrentBook(book);
  // };

  // useEffect(() => {
  //   update(currentBook, shelfType).then((res) => console.log(res));
  //   getAll().then((res) => console.log(res));
  //   console.log(`${shelfType} ${currentBook.id}`);
  // }, [shelfType]);

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);
  // const node = useRef();

  // const handleClick = (e) => {
  //   if (node.current && node.current.contains(e.target)) {
  //     // inside click
  //     console.log('inside');
  //   } // outside click
  //   else console.log('outside');
  //   // ... do whatever on click outside here ...
  // };

  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener('mousedown', handleClick); // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, []);

  return (
    <div>
      <SearchBar
        type="text"
        searchValue={query}
        placeholder="Search for a book"
        icon={<BsArrowLeftShort />}
        handleChange={handleChange}
      />
      <BookList data={data} />
      {/*
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
          */}
    </div>
  );
};

export default SearchPage;

// wait for data to load so that it becomes defined
// getting error since data is an object not array???
// make a book component
// when adding a book, remember to update global state
