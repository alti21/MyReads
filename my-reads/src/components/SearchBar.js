import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ type, placeholder, className, component }) => {
  return (
    <div>
      {component}
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  component: PropTypes.elementType.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Search',
  className: 'search-bar',
};

export default SearchBar;
