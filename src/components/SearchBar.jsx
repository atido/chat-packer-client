function SearchBar(props) {
    const { query, handleSearch } = props;
  
    return (
      <div className="search-bar">
        <label>
          <input
            name="searchBar"
            placeholder="🔍 destination city"
            value={query}
            type="text"
            onChange={(event) => handleSearch(event)}
          />
        </label>
      </div>
    );
  }
  
  export default SearchBar;
  