import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "../styleSheets/App.scss";
import apiCall from "../services/api";
import pickle from "../images/pickle-rick.png";
import CharacterList from "./CharacterList/CharacterList";
import Filters from "./Filters/Filters";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import Header from "./Header/Header";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState(false);

  //Api
  useEffect(() => {
    apiCall().then((data) => setCharacterData(data.results));
  }, []);

  //Events
  const handleFilterInput = (value) => {
    setFilterValue(value);
  };
  const handleSortInput = (check) => {
    setSortValue(check);
  };

  //Render
  const renderFilteredCharacters = () => {
    const filteredCharacters = characterData.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    if (sortValue) {
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
      filteredCharacters.sort((prev, next) => {
        if (prev.name.toLowerCase() > next.name.toLowerCase()) {
          return 1;
        }
        if (prev.name.toLowerCase() < next.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    return filteredCharacters;
  };
  const renderCharacterDetail = (props) => {
    const characterDetailId = parseInt(props.match.params.id);
    const characterDetail = characterData.find(
      (item) => item.id === characterDetailId
    );
    if (characterDetail) {
      return (
        <CharacterDetail
          image={characterDetail.image}
          name={characterDetail.name}
          status={characterDetail.status}
          species={characterDetail.species}
          origin={characterDetail.origin.name}
          episodes={characterDetail.episode.length}
        />
      );
    } else {
      return (
        <section className="not-found">
          <h2 className="not-found__title">Character not found</h2>
          <Link title="Main page" className="link" to="/">
            <span className="not-found__link">Back to finder</span>
          </Link>
          <img src={pickle} alt="Pickle Rick" className="not-found__image" />
        </section>
      );
    }
  };
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            handleFilterInput={handleFilterInput}
            filterValue={filterValue}
            handleSortInput={handleSortInput}
            sortValue={sortValue}
          />
          <CharacterList
            characterData={renderFilteredCharacters()}
            filterValue={filterValue}
          />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
