import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link className="link" to={`/card/${props.id}`}>
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
    </Link>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default CharacterCard;
