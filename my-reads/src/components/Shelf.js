import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import { getAll } from '../api/BooksAPI';
import BookList from './BookList';

const Shelf = ({ data, shelfName, setShelfType }) => {
  // const [data, setData] = useState([]);

  let shelfType = '';
  if (shelfName === 'Currently Reading') shelfType = 'currentlyReading';
  else if (shelfName === 'Want To Read') shelfType = 'wantToRead';
  else if (shelfName === 'Read') shelfType = 'read';

  // put this getAll call in display page???
  // useEffect(() => {
  //   let unmounted = false;
  //   getAll().then((res) => {
  //     if (!unmounted && res.length > 0) {
  //       setData(res);
  //     } else if (!unmounted) setData([]);
  //   });
  //   return () => {
  //     unmounted = true;
  //   };
  // }, []);

  return (
    <>
      <Header
        content={shelfName}
        headingClass="shelf-header"
        headingLevel="h2"
      />
      <hr />
      <BookList
        data={data}
        shelfType={shelfType}
        setShelfType={(shelf) => setShelfType(shelf)}
      />
    </>
  );
};

Shelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf().isRequired,
  setShelfType: PropTypes.func.isRequired,
};

export default Shelf;
