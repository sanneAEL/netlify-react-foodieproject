import React from 'react';

function SearchForm() {
  return (
    <form className="form-horizontal">
      <input placeholder="Search Recipes" type="text" name="searchString" required />
      <button type="submit">search</button>
    </form>
  );
}

export default SearchForm;