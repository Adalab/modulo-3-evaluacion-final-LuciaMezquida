import PropTypes from "prop-types";

const Filters = (props) => {
  const handleFilterInput = (ev) => {
    props.handleFilterInput(ev.currentTarget.value);
  };
  const handleFormSubmit = (ev) => ev.preventDefault();
  return (
    <form className="filters" onSubmit={handleFormSubmit}>
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
Filters.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
export default Filters;
