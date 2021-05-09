import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ type, placeholder }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

SearchBar.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  type: 'text',
  placeholder: 'Search',
};

export default SearchBar;
