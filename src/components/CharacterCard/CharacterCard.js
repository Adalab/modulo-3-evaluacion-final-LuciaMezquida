import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  const speciesIcon =
    props.species === "Human" ? (
      <i className="fas fa-universal-access"></i>
    ) : props.species === "Alien" ? (
      <img src="//img.icons8.com/ios/30/000000/alien.png" />
    ) : (
      ""
    );
  return (
    <Link className="link" to={`/character/${props.id}`}>
      <article className="character-card">
        <img
          className="character-card__image"
          src={props.image}
          alt={props.name}
        />
        <section className="character-card__text">
          <h2 className="character-card__text--name">{props.name}</h2>
          <span className="character-card__text--species-icon">
            {speciesIcon}
          </span>
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
