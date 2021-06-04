import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillCaretDownFill } from 'react-icons/bs';

const ButtonDropDown = ({ choices, label, onSelectChoice, shelf }) => {
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
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="dropdown-choice"
            onClick={() => {
              // we create an specific callback for each item
              onSelectChoice(choice); // callback in parent component
            }}
            type="button"
            value={choice}
          >
            {shelf === choice ? 'o ' : ''} {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

ButtonDropDown.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  onSelectChoice: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
};

ButtonDropDown.defaultProps = {
  label: 'Move to...',
};

export default ButtonDropDown;
