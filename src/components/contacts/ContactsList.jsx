import css from './ContactList.module.css';

const ContactList = ({ state: { contacts, filter }, handleDelete }) => {
  const contactArr = contacts.filter(
    i =>
      i.name.toLowerCase().includes(filter.toLowerCase()) ||
      i.number.includes(filter)
  );
  return (
    <>
      <ul className={css.contactList}>
        {contactArr.map(i => {
          return (
            <li id={i.id} key={i.id} className={css.contactItem}>
              {i.name}: {i.number}
              <button
                onClick={() => handleDelete(i.id)}
                className={css.contactBtn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
