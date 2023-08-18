import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ButtonStyled,
  InputEnterStyled,
  InputFormStyled,
  InputStyled,
} from './contactForm.styled';

export const ContactForm = ({ checkDuplicateContact, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    if (value.includes('!')) {
      alert('Invalid word');
    }
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (checkDuplicateContact(name)) {
      alert(`Contact with name '${name}' already exists.`);
      return;
    }

    onSubmit({ id: nanoid(), name, phone: number });
    setName('');
    setNumber('');
  };

  return (
    <InputFormStyled onSubmit={handleSubmit}>
      <InputStyled>
        <label>Name:</label>
        <InputEnterStyled
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeInput}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </InputStyled>
      <InputStyled>
        <label>Number:</label>
        <InputEnterStyled
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleChangeInput}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputStyled>
      <ButtonStyled type="submit">Add Contact</ButtonStyled>
    </InputFormStyled>
  );
};

ContactForm.propTypes = {
  checkDuplicateContact: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
