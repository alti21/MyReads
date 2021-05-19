import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { debounce } from 'debounce';
import SearchBar from '../components/SearchBar';
import { search } from '../api/BooksAPI';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const bookSearch = debounce(() => {
      if (query.length > 0) {
        search(query).then((res) => {
          if (res.length > 0) setData(res);
          else setData([]);
        });
      } else {
        setData([]); // make sure data is not undefined
      }
    }, 1000);
    bookSearch();
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
      {console.log(data)}
      {typeof data !== 'undefined'
        ? data.map((book) => (
            <>
              <div>{book.title}</div>
              <div>{book.authors}</div>
              <img src={book.imageLinks.thumbnail} alt={book.title} />
            </>
          ))
        : 'test'}
    </div>
  );
};

export default SearchPage;

// wait for data to load so that it becomes defined
// getting error since data is an object not array???
// make a book component
// when adding a book, remember to update global state
