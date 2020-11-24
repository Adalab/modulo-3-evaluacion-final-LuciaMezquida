import loading from "../../images/portal.png";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader__container">
      <h3 className="loader__title">Loading...</h3>
      <img className="loader__img" src={loading} alt="Portal" />
    </div>
  );
};
export default Loader;
