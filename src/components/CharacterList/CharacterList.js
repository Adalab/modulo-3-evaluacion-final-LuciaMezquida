import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import rickImage from "../../images/ups-image.png";
import "./CharacterList.scss";
const CharacterList = (props) => {
  const characterList =
    !props.characterData.length && !props.isLoading ? (
      <div className="list-container">
        <h2 className="list-container__message">
          No character matches the word:
        </h2>
        <p className="list-container__message">{props.filterValue}</p>
        <img
          className="list-container__image"
          src={rickImage}
          alt="Rick and Morty"
        />
      </div>
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
    </main>
  );
};
CharacterList.propTypes = {
  characterData: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default CharacterList;
