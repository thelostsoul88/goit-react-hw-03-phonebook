import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.handleReset();
  };
  handleReset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    return (
      <div className={css.formContainer}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId} className={css.formLabel}>
            Name
          </label>
          <input
            id={this.nameId}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
          <label className={css.formLabel} htmlFor={this.numberId}>
            Number
          </label>
          <input
            id={this.numberId}
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
          <button className={css.formbBtn} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
