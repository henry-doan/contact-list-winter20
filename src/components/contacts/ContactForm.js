import { Component } from 'react';

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  // type, storing whatever the user types in state
  handleChange = (e) => {
    const { name, value } = e.target
    // firstName, value = tom
    // this.setState({ firstName: 'tom' })

    // phone, 123123123
    // this.setState({ phone: '123123123' })

    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.setState({ firstName: '', phone: '' })
  }

  render() {
    const { firstName, phone } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='firstName'
          value={firstName}
          onChange={this.handleChange}

          required
          placeholder='first name'
        />
        <input
          name='phone'
          value={phone}
          onChange={this.handleChange}

          required
          placeholder='phone'
        />
        <input
          type='submit'
        />
      </form>
    )
  }
}

export default ContactForm;