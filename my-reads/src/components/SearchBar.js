import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeftShort } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const SearchBar = ({
  type,
  placeholder,
  inputClassName,
  iconClassName,
  icon,
  handleChange,
  searchValue,
}) => {
  return (
    <div>
      <NavLink to="/MyReads">
        <span className={iconClassName}>{icon}</span>
      </NavLink>
      <input
        type={type}
        value={searchValue}
        placeholder={placeholder}
        className={inputClassName}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  handleChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Search',
  inputClassName: 'search-bar',
  iconClassName: 'input-arrow',
  icon: <BsArrowLeftShort />,
};

export default SearchBar;
