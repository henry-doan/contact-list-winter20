const ContactList = ({ contacts, removeContact }) => (
  <>
    <ul>
      { contacts.map( c => (
        <li>
          {c.firstName} {c.phone}
          <button onClick={ () => removeContact(c.id) }>trash</button>
        </li>
      ))}
    </ul>
  </>
)

export default ContactList;