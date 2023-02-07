import React from "react";

function SearchBar({
  sortBy,
  setSortBy,
  order,
  setOrder,
  searchParams,
  setSearchParams,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let params = serializeFormQuery(e.target);
    setSearchParams(params);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Refine your search:</legend>
        <label htmlFor="sort-by">Sort By:</label>
        <select
          id="sort-by"
          name="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option key="default" value="default">
            Default
          </option>
          <option key="created_at" value="created_at">
            Date
          </option>
          <option key="comment_count" value="comment_count">
            Comments
          </option>
          <option key="votes" value="votes">
            Votes
          </option>
        </select>
        <label htmlFor="order">Order:</label>
        <select
          id="order"
          name="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option key="default" value="default">
            Default
          </option>
          <option key="asc" value="asc">
            Asc
          </option>
          <option key="desc" value="desc">
            Desc
          </option>
        </select>
        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
}

export default SearchBar;
