import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Form from './form/Form';
import ContactList from './contacts/ContactsList';
import Filter from './filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContact = localStorage.getItem('contacts');
    if (localContact) this.setState({ contacts: JSON.parse(localContact) });
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleUpdate = data =>
    this.state.contacts.some(el => el.name === data.name)
      ? Notiflix.Notify.failure(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            { name: data.name, number: data.number, id: nanoid() },
            ...prevState.contacts,
          ],
        }));

  handleFilter = value =>
    this.setState(() => ({
      filter: value,
    }));

  handleDelete = id =>
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form handleUpdate={this.handleUpdate} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <Filter state={this.state} handleFilter={this.handleFilter} />
        )}
        <ContactList state={this.state} handleDelete={this.handleDelete} />
      </>
    );
  }
}
