import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ship from "../../images/ship.png";
import "./CharacterDetail.scss";

const CharacterDetail = (props) => {
  const status =
    props.status === "Dead" ? (
      <img src="https://img.icons8.com/cotton/25/000000/headstone--v1.png" />
    ) : props.status === "unknown" ? (
      <img src="https://img.icons8.com/dotty/25/000000/question-mark.png" />
    ) : (
      props.status
    );
  const species =
    props.species === "Alien" ? (
      <img src="https://img.icons8.com/ios-filled/25/000000/alien.png" />
    ) : props.species === "Human" ? (
      <img src="https://img.icons8.com/ios/25/000000/da-vinci.png" />
    ) : (
      props.species
    );
  return (
    <section className="container">
      <div className="character-detail">
        <article className="character-detail__card">
          <img
            src={props.image}
            alt={props.name}
            className="character-detail__card--image"
          />
          <div className="character-detail__card--description">
            <p className="character-detail__card--name">NAME: {props.name}</p>
            <p className="character-detail__card--status">STATUS: {status}</p>
            <p className="character-detail__card--species">
              SPECIES: {species}
            </p>
            <p className="character-detail__card--origin">
              ORIGIN: {props.origin}
            </p>
            <p className="character-detail__card--episodes">
              EPISODES: {props.episodes}
            </p>
          </div>
        </article>
      </div>
      <div className="character-detail__back">
        <Link className="link" to="/">
          <button
            className="character-detail__back--button"
            title="Back to landing"
          >
            Back
          </button>
        </Link>
        <img
          src={ship}
          alt="Spaceship"
          className="character-detail__back--ship"
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
