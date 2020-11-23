import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
import rickImage from "../../images/ups-image.png";
import "./CharacterList.scss";
const CharacterList = (props) => {
  const characterList = !props.characterData.length ? (
    <div className="character-list__container">
      <h2 className="character-list__container--message">
        No character matches the word:
      </h2>
      <p className="character-list__container--message">{props.filterValue}</p>
      <img
        className="character-list__container--image"
        src={rickImage}
        alt="Rick and Morty"
      />
    </div>
  ) : (
    props.characterData.map((item) => (
      <li key={item.id}>
        <CharacterCard
          id={item.id}
          image={item.image}
          name={item.name}
          species={item.species}
        />
      </li>
    ))
  );
  return <ul className="character-list">{characterList}</ul>;
};
CharacterList.propTypes = {
  characterData: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default CharacterList;
