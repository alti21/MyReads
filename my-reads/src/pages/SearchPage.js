import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
// import { debounce } from 'debounce';
import SearchBar from '../components/SearchBar';
import { search } from '../api/BooksAPI';
import Book from '../components/Book';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

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
    // bookSearch();
    // console.log(data); // undefined initially since we didnt search anything
    return () => clearTimeout(bookSearch);
    // if (data !== []) setIsLoading(false);
    // setIsLoading(true);
  }, [query]);

  return (
    <div>
      <SearchBar
        type="text"
        searchValue={query}
        placeholder="Search for a book"
        icon={<BsArrowLeftShort />}
        handleChange={handleChange}
      />
      <div className="book-list">
        {data !== []
          ? data.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                authors={book.authors}
                thumbnail={book.imageLinks.thumbnail}
              />
            ))
          : 'ok'}
      </div>
    </div>
  );
};

export default SearchPage;

// wait for data to load so that it becomes defined
// getting error since data is an object not array???
// make a book component
// when adding a book, remember to update global state
