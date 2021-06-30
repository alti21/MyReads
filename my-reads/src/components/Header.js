import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ content, className, headingLevel }) => {
  const Heading = headingLevel;
  return (
    <div className={className}>
      <Heading>{content}</Heading>
    </div>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  headingLevel: PropTypes.string.isRequired,
};

export default Header;
