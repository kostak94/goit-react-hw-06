import Contact from "../Contact/Contact";
import css from "../PhoneBook.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/filtersSlice";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filters = useSelector(selectFilters);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  if (!filteredContacts.length && filters) {
    return <h2>Search query is not valid...</h2>;
  } else if (!filteredContacts.length) {
    return <h2>No contacts yet...</h2>;
  }
  return (
    <ul className={css.list}>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          item={item}
          deleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
