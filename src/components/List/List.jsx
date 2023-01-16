import React from 'react';
import PropTypes from 'prop-types';
import { ListEl, ListItem, ListButton } from './List.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const List = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVizibleContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  const vizibleContacts = getVizibleContacts();

  return (
    <ListEl>
      {vizibleContacts.map((contact, id) => (
        <ListItem key={id}>
          {contact.name}: {contact.number}
          <ListButton
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ListButton>
        </ListItem>
      ))}
    </ListEl>
  );
};

List.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
