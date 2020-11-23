import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <article className="character-card">
      <img className="character-card__image" src="" alt="" />
      <section className="character-card__text">
        <h2 className="character-card__text--name"></h2>
        <p className="character-card__text--species"></p>
      </section>
    </article>
  );
};

CharacterCard.propTypes = {};
export default CharacterCard;
