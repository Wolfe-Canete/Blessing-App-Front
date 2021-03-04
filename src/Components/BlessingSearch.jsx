import React, { useState } from "react";


export default function Search() {
  const [searchBlessings, setSearchBlessings] = useState([]);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const userInput = event.target.value.toLowerCase(); // the user input is set to lower case
    const filterBlessings = searchBlessings.filter((searchBlessing) => {
      return searchBlessing.content.toLowerCase().includes(userInput);
      // if the receipt includes the user's input (set to lowercase) return it
    });
    setSearchBlessings(filterBlessings); //if there is no user input, return to initial state
    if (!userInput) {
        console.log(userInput)
      setSearchBlessings();
    }
  };

  const [searchState, setSearchState] = useState("");

  const searchSubmit = (event) => {
    event.preventDefault();
    setSearchState({ ...searchState, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="searchState"
          className="searchBar"
          id="search"
          onChange={handleSearch}
          value={searchSubmit.value}
        />
      </form>
    </div>
  );
}
