import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='flex flex-row justify-between bg-[#e4e4e4] dark:bg-[#111111] dark:text-white p-2 rounded-lg w-[350px] h-auto'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'line-through text-black/50 dark:text-white/50' : ""} text-wrap break-all`}>{task.task}</p>
      <div className='flex flex-row items-center space-x-3 ml-2'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
