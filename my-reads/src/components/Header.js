import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ content, className, headingLevel, headingClass }) => {
  const Heading = headingLevel;
  return (
    <div className={className}>
      <Heading className={headingClass}>{content}</Heading>
    </div>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  headingLevel: PropTypes.string.isRequired,
  headingClass: PropTypes.string,
};

Header.defaultProps = {
  headingClass: 'heading',
};

export default Header;
