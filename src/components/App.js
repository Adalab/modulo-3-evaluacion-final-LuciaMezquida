import React, { useState, useEffect } from "react";
import apiCall from "../services/api";
import CharacterList from "./CharacterList/CharacterList";
import Filters from "./Filters/Filters";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [filterValue, setFilterValue] = useState();

  //Api
  useEffect(() => {
    apiCall().then((data) => setCharacterData(data.results));
  }, []);

  //Events
  const handleFilterInput = (value) => {
    setFilterValue(value);
  };

  //Render
  const renderFilteredCharacters = () => {
    const filteredCharacters = characterData.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredCharacters;
  };
  return (
    <>
      <Filters
        handleFilterInput={handleFilterInput}
        filterValue={filterValue}
      />
      <CharacterList characterData={renderFilteredCharacters()} />
    </>
  );
};

export default App;
