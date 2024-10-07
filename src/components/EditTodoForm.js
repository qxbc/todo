import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  }

  const handleInput = (event) => {
    event.target.setCustomValidity('');
    setErrorMessage('');
  }

  const handleInvalid = (event) => {
    event.target.setCustomValidity('Введите задачу!');
    setErrorMessage('Введите задачу!');
  }

  return (
    <form className='flex flex-row space-x-5' onSubmit={handleSubmit}>
      <input
      type='text'
      className='p-2 rounded-xl dark:bg-[#111111] dark:text-white dark:placeholder:text-white/50'
      value={value}
      placeholder='Изменить задачу'
      onChange={(e) => setValue(e.target.value)}
      required
      onInput={handleInput}
      onInvalid={handleInvalid}
      />
      <button type='submit' className='dark:text-white'>Изменить задачу</button>
    </form>
  )
}
