import PropTypes from "prop-types";
import "./Filters.scss";

const Filters = (props) => {
  const handleFilterInput = (ev) => {
    props.handleFilterInput(ev.currentTarget.value);
  };
  const handleFormSubmit = (ev) => ev.preventDefault();
  const handleSortInput = (ev) => {
    props.handleSortInput(ev.currentTarget.checked);
  };
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
        placeholder="Pickle Rick"
      />
      <label htmlFor="sort" className="filters__sort">
        <input
          onChange={handleSortInput}
          type="checkbox"
          name="sort"
          id="sort"
          className="filters__check"
        />
        <span
          className={`filters__fake-check ${props.sortValue ? "checked" : ""}`}
        ></span>
        Sort by name
      </label>
    </form>
  );
};
Filters.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  handleSortInput: PropTypes.func.isRequired,
  sortValue: PropTypes.bool.isRequired,
};
export default Filters;
