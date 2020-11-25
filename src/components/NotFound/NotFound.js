import pickle from "../../images/pickle-rick.png";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <h2 className="not-found__title">Character not found</h2>
      <Link title="Main page" className="link" to="/">
        <span className="not-found__link">Back to finder</span>
      </Link>
      <img src={pickle} alt="Pickle Rick" className="not-found__image" />
    </section>
  );
};

export default NotFound;
