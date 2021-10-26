import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  filterId = shortid()

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  addNewContact = (contact) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
     })
  }

  banOnAddingDuplicateContact = (value) => {
    this.state.contacts.map(contact => contact.name).includes(value.name) ?
      alert(`${value.name} is already in contacts`) :
      this.addNewContact(value);
  }

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  
  render() {

    const { banOnAddingDuplicateContact, handleChangeFilter, deleteContact, filterId } = this
    const {filter, contacts} = this.state

    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm
          banOnAddingDuplicateContact={banOnAddingDuplicateContact}>
        </ContactForm>

        <h2>Contacts</h2>

        <Filter
          filterId={filterId}
          handleChangeFilter={handleChangeFilter}>
        </Filter>

        <ContactList>
          <ContactItem
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}>
          </ContactItem>
        </ContactList>
      </div>
    )
  }
}

export default App;
