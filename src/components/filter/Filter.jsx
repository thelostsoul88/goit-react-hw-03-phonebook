import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const filterId = nanoid();
const Filter = ({ handleFilter, state }) => {
  return (
    <div className={css.filterContainer}>
      <label htmlFor={filterId} className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        onChange={e => {
          handleFilter(e.currentTarget.value.trim());
        }}
        name="name"
        type="text"
        value={state.filter}
        className={css.filterInput}
        autoComplete="off"
      />
    </div>
  );
};

export default Filter;
