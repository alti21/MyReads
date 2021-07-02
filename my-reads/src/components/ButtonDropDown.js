import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BsFillCaretDownFill } from 'react-icons/bs';

const ButtonDropDown = ({
  choices,
  label,
  onSelectChoice,
  currentShelf,
  choiceName,
  labelText,
}) => {
  const [active, setActive] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      setActive(true);
      return;
    }
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={node}>
      <button type="button" className="btn" aria-label={labelText}>
        <BsFillCaretDownFill />
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${active ? `show` : `hide`}`}
      >
        <div className="dropdown-label">{label}</div>
        {choices.map((choice, index) => (
          <button
            className="dropdown-choice"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            onClick={() => onSelectChoice(choice)}
          >
            <span className="check-mark">
              {currentShelf === choice ? '✔' : ''}
            </span>
            {choiceName[choice]}
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
  currentShelf: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  choiceName: PropTypes.shape({
    currentlyReading: PropTypes.string,
    wantToRead: PropTypes.string,
    read: PropTypes.string,
  }),
};

ButtonDropDown.defaultProps = {
  label: 'Move to...',
  choiceName: {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want To Read',
    read: 'Read',
    none: 'None',
  },
};

export default ButtonDropDown;
