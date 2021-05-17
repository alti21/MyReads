import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  return (
    <div>
      <SearchBar
        type="text"
        placeholder="        Search for a book"
        icon={<BsArrowLeftShort />}
      />
    </div>
  );
};

export default SearchPage;
