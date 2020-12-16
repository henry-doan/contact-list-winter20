import { Component } from 'react';
import ContactList from './components/contacts/ContactList';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'bob', phone: '123-234-2134' },
    { id: 2, firstName: 'jill', phone: '113-234-2134' },
    { id: 3, firstName: 'rick', phone: '123-554-2134' },
  ]}

  render() {
    const { contacts } = this.state
    return (
      <>
        <h1>React Contact List</h1>
        <ContactList contacts={contacts} />
      </>
    )
  }
}

export default App;
