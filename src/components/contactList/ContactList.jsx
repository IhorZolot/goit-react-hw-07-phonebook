import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDeleteStyled, ContactNameStyled } from './contactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactNameStyled key={contact.id}>
          {contact.name}: {contact.phone}
          <ButtonDeleteStyled onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ButtonDeleteStyled>
        </ContactNameStyled>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
