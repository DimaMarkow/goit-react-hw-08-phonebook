import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';

import css from './phonebook.module.css';
import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactList from 'components/Phonebook/ContactList/ContactList';
import Filter from 'components/Phonebook/Filter/Filter';
import Loader from 'components/Phonebook/Loader/Loader';

import {
  getFilteredContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contacts-selectors';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={css.wrapper}>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
      {isContacts && <ContactList />}
      {!isContacts && !isLoading && <p>No contacts in the list</p>}
    </div>
  );
};

export default Phonebook;
