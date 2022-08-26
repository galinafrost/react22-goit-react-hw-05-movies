import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handlSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };
  return (
    <form onSubmit={handlSubmit}>
      <input
        name="search"
        value={search}
        onChange={handlChange}
        type="text"
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
