import propTypes from 'prop-types';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const onHandleChange = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { input } = e.currentTarget;
    onSubmit(input.value);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={onHandleChange} name="input" />
      <button type="submit">SEARCH</button>
    </form>
  );
};

SearchForm.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
