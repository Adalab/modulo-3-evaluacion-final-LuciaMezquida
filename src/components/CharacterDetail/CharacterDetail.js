import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ship from "../../images/ship.png";

const CharacterDetail = (props) => {
  const status =
    props.status === "Dead"
      ? "☠️"
      : props.status === "unknown"
      ? "🤷🏻‍♀️"
      : props.status;
  const species =
    props.species === "Alien"
      ? "👽"
      : props.species === "Human"
      ? "🧍🏻‍♀️"
      : props.species;
  return (
    <section className="character-detail">
      <article className="character-detail__card">
        <img
          src={props.image}
          alt={props.name}
          className="character-detail__card--image"
        />
        <div className="character-detail__card--description">
          <h2 className="character-detail__card--name">Name: {props.name}</h2>
          <p className="character-detail__card--status">Status: {status}</p>
          <p className="character-detail__card--species">Species: {species}</p>
          <p className="character-detail__card--origin">
            Origin: {props.origin}
          </p>
          <p className="character-detail__card--episodes">
            Episodes: {props.episodes}
          </p>
        </div>
      </article>
      <div className="character-detail__back">
        <Link className="link" to="/">
          <button
            className="character-detail__card--button"
            title="Back to landing"
          >
            Back
          </button>
        </Link>
        <img
          src={ship}
          alt="Spaceship"
          className="character-detail__card--ship"
        />
      </div>
    </section>
  );
};
CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
};
export default CharacterDetail;
