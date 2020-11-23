import React, { useState, useEffect } from "react";
import apiCall from "../services/api";

const App = () => {
  const [characterData, setCharacterData] = useState([]);

  //Api
  useEffect(() => {
    apiCall().then((data) => setCharacterData(data.results));
  }, []);
  return <p>{console.log(characterData)}</p>;
};

export default App;
