import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <article className="character-card">
      <img
        className="character-card__image"
        src={props.image}
        alt={props.name}
      />
      <section className="character-card__text">
        <h2 className="character-card__text--name">{props.name}</h2>
        <p className="character-card__text--species">{props.species}</p>
      </section>
    </article>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};
export default CharacterCard;
