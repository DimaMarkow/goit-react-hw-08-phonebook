import { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

// import css from 'components/Phonebook/phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { getAllContacts } from 'redux/contacts/contacts-selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const AllContacts = useSelector(getAllContacts);

  const resetForm = () => {
    setState(INITIAL_STATE);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const data = state;

    const normalizedName = data.name.toLowerCase();
    const isRepeatedContact = AllContacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isRepeatedContact) {
      const alertString = data.name + ' is already in contacts.';
      alert(alertString);
      return;
    }
    dispatch(addContact({ ...data }));
    resetForm();
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          p: 1,
        }}
      >
        Phonebook
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 400 },
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          {' '}
          <TextField
            id="outlined-name-input"
            label="name"
            type="text"
            name="name"
            required
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-number-input"
            label="tel number"
            type="number"
            name="number"
            required
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={state.number}
            onChange={handleChange}
          />
        </div>
        <Button type="submit"> Add contact</Button>
      </Box>
    </>
  );
};

export default ContactForm;

// return (
//   <>
//     <h2 className={css.title}>Phonebook</h2>
//     <form className={css.buttonWrapper} onSubmit={handleSubmit}>
//       <label className={css.text}>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={state.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={css.text}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={state.number}
//           onChange={handleChange}
//         />
//       </label>
//       <button className={css.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   </>
// );
