import { Component } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'bob', phone: '123-234-2134' },
    { id: 2, firstName: 'jill', phone: '113-234-2134' },
    { id: 3, firstName: 'rick', phone: '123-554-2134' },
    // { id: 54, firstName: 'tom', phone: '12342`134543'}
  ]}

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

                // { firstName: 'tom', phone: '123213' }
  addContact = (incomingContact) => {
    // let newContact = { id: this.getId(), firstName: incomingContact.firstName, phone: incomingContact.phone }
    const { contacts } = this.state
                    //  { 65, firstName: 'tom', phone: '123213'}
    let newContact = { id: this.getId(), ...incomingContact }
    this.setState({ contacts: [ newContact, ...contacts ] })
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id) {
        return contact
      }
    })
    this.setState({ contacts: [...contacts]})
  }

  render() {
    const { contacts } = this.state
    return (
      <>
        <h1>React Contact List</h1>
        <ContactForm addContact={this.addContact} />
        <ContactList contacts={contacts} removeContact={this.removeContact} />
      </>
    )
  }
}

export default App;
