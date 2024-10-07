import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  }
  return (
    <form className='flex flex-row space-x-5' onSubmit={handleSubmit}>
      <input type='text' className='p-2 rounded-xl dark:bg-[#111111] dark:text-white dark:placeholder:text-white/50' value={value} placeholder='Изменить задачу' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='dark:text-white'>Изменить задачу</button>
    </form>
  )
}
