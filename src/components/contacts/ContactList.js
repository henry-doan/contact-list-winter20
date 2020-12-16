const ContactList = ({ contacts }) => (
  <>
    <ul>
      { contacts.map( c => (
        <li>
          {c.firstName} {c.phone}
        </li>
      ))}
    </ul>
  </>
)

export default ContactList;