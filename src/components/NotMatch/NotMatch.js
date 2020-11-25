import "./NotMatch.scss";
import PropTypes from "prop-types";
import rickImage from "../../images/ups-image.png";

const NotMatch = (props) => {
  return (
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
  );
};
NotMatch.propTypes = {
  filterValue: PropTypes.string.isRequired,
};
export default NotMatch;
