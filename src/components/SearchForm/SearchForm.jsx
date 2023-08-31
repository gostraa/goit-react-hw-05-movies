import propTypes from 'prop-types';
import { useState } from 'react';
import style from './SearchForm.module.css';

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
    <form className={style['search_form']} onSubmit={handleSubmit}>
      <input
        className={style['search_input']}
        type="text"
        value={input}
        onChange={onHandleChange}
        name="input"
      />
      <button className={style['search_button']} type="submit">
        SEARCH
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
