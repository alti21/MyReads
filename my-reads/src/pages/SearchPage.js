import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import SearchBar from '../components/SearchBar';
import { search } from '../api/BooksAPI';
import BookList from '../components/BookList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

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
    </div>
  );
};

export default SearchPage;
