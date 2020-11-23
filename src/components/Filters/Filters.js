import PropTypes from "prop-types";

const Filters = (props) => {
  const handleFilterInput = (ev) => {
    props.handleFilterInput(ev.currentTarget.value);
  };
  return (
    <form className="filters">
      <label htmlFor="search" className="filters__title">
        Who are you looking for?
      </label>
      <input
        onChange={handleFilterInput}
        type="text"
        name="search"
        id="search"
        value={props.filterValue}
        className="filters__input"
      />
    </form>
  );
};
Filters.propTypes = {};
export default Filters;
