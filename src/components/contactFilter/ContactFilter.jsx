import React from 'react';
import PropTypes from 'prop-types';

import { InputEnterStyled, SearchFormstyled } from './contactFilter.styled';

export const ContactFilter = ({ filter, onChange }) => {
  return (
    <SearchFormstyled>
      <h3>Find contacts by name</h3>
      <InputEnterStyled
        type="text"
        value={filter}
        placeholder="Enter name"
        onChange={onChange}
      />
    </SearchFormstyled>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
