import React from 'react';

const SimpleSearchForm = (props) => {

   return (
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
         <label htmlFor="search-input" className=" hide-accessible"> Write to search</label>
         <input
            value={props.searchValue}
            onChange={(e) => props.handleChange(e.target.value)}
            className="input"
            type="search"
            name="search-input"
            id="search-input"
            placeholder="Write to search" />
         <button type="button" className="button" onClick={() => props.handleChange("")}>Clear</button>
      </form>
   )
}

export default SimpleSearchForm;