import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ content, className }) => (
  <div className={className}>
    <h1>{content}</h1>
  </div>
);

Header.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Header;
