import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import NotMatch from "../NotMatch/NotMatch";
import "./CharacterList.scss";

const CharacterList = (props) => {
  const characterList =
    !props.characterData.length && !props.isLoading ? (
      <NotMatch filterValue={props.filterValue} />
    ) : (
      props.characterData.map((item) => (
        <li className="list" key={item.id}>
          <CharacterCard
            id={item.id}
            image={item.image}
            name={item.name}
            species={item.species}
          />
        </li>
      ))
    );
  return (
    <main className="main">
      <ul className="main__character-list">{characterList}</ul>;
      <div className="main__button-container">
        <a href="#" className="main__button-container--button">
          Up
        </a>
      </div>
    </main>
  );
};
CharacterList.propTypes = {
  characterData: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default CharacterList;
