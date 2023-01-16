import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filterSlice';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
