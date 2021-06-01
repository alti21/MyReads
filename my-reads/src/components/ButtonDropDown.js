import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillCaretDownFill } from 'react-icons/bs';

const ButtonDropDown = ({ choices, label }) => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropbtn"
        onFocus={toggleClass}
        onBlur={toggleClass}
      >
        <BsFillCaretDownFill />
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${active ? `show` : `hide`}`}
      >
        <div className="dropdown-label">{label}</div>
        {choices.map((choice, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="dropdown-choice">
            <div>{choice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

ButtonDropDown.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
};

ButtonDropDown.defaultProps = {
  label: 'Move to...',
};

export default ButtonDropDown;
