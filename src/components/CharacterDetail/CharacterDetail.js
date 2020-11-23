import PropTypes from "prop-types";
import ship from "../../images/ship.png";

const CharacterDetail = (props) => {
  return (
    <section className="character-detail">
      <article className="character-detail__card">
        <img src="" alt="" className="character-detail__card--image" />
        <div className="character-detail__card--description">
          <h2 className="character-detail__card--name"></h2>
          <p className="character-detail__card--status"></p>
          <p className="character-detail__card--species"></p>
          <p className="character-detail__card--origin"></p>
          <p className="character-detail__card--episodes"></p>
        </div>
      </article>
      <div className="character-detail__back">
        <button
          className="character-detail__card--button"
          title="Back to landing"
        >
          Back
        </button>
        <img
          src={ship}
          alt="Spaceship"
          className="character-detail__card--ship"
        />
      </div>
    </section>
  );
};
CharacterDetail.propTypes = {};
export default CharacterDetail;
