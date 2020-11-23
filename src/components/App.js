import React, { useState, useEffect } from "react";
import apiCall from "../services/api";
import CharacterList from "./CharacterList/CharacterList";

const App = () => {
  const [characterData, setCharacterData] = useState([]);

  //Api
  useEffect(() => {
    apiCall().then((data) => setCharacterData(data.results));
  }, []);
  return <CharacterList characterData={characterData} />;
};

export default App;
