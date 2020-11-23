import PropTypes from "prop-types";
import CharacterCard from "../CharacterCard/CharacterCard";
const CharacterList = (props) => {
  const characterList = props.characterData.map((item) => (
    <li key={item.id}>
      <CharacterCard
        image={item.image}
        name={item.name}
        species={item.species}
      />
    </li>
  ));
  return <ul className="character-list">{characterList}</ul>;
};
CharacterList.propTypes = {
  characterData: PropTypes.array,
};
export default CharacterList;
