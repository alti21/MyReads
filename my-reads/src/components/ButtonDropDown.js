import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BsFillCaretDownFill } from 'react-icons/bs';

const ButtonDropDown = ({
  choices,
  label,
  onSelectChoice,
  // shelf,
  currentShelf,
  choiceName,
}) => {
  const [active, setActive] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      setActive(true);
      return;
    } // outside click
    setActive(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  // for initial checkmark (to make checkmark appear on initial render), initialize shelfType to book's currentshelf using api call getAll?
  return (
    <div className="dropdown" ref={node}>
      <button type="button" className="btn">
        <BsFillCaretDownFill />
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${active ? `show` : `hide`}`}
      >
        <div className="dropdown-label">{label}</div>
        {choices.map((choice, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="choice-wrapper" key={index}>
            <span className="check-mark">
              {currentShelf === choice ? '✔' : ''}
            </span>
            <button
              className="dropdown-choice"
              onClick={() => {
                // we create an specific callback for each item
                onSelectChoice(choice); // callback in parent component
              }}
              type="button"
              value={choice}
            >
              {choiceName[choice]}
            </button>
          </div>
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

// for checkmark next to selected shelf, pull that from API data i.e. from getAll?55, maybe create an object mapping them?