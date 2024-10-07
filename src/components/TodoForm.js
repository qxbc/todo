import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // убедитесь, что путь правильный

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [dark, setDark] = useState(false);

  // Load theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const isDark = storedTheme === 'dark';
      setDark(isDark);
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <section className=''>
      <form className='flex flex-row space-x-5 items-center' onSubmit={handleSubmit}>
        <input
          type='text'
          className='p-2 rounded-xl dark:bg-[#111111] dark:text-white dark:placeholder:text-white/50'
          value={value}
          placeholder='Какая задача сегодня?'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='dark:text-white'>Добавить задачу</button>
        <button type='button' className='' onClick={darkModeHandler}>
          {dark ? <FontAwesomeIcon icon={faMoon} width={20} color='white'/> : <FontAwesomeIcon icon={faSun} width={20} />}
        </button>
      </form>
    </section>
  );
};
