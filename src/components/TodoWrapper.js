import React, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

    const addTodo = todo => {
      setTodosWithSave([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
      console.log(todos)
    }

    const toggleComplete = id => {
      setTodosWithSave(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
      setTodosWithSave(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
      setTodosWithSave(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodosWithSave(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const setTodosWithSave = (newTodos) => {
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos))
    }
  return (
    <section className='flex justify-center'>
      <div className='flex flex-col max-w-[1440px] justify-center mt-52 p-10 space-y-5'>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
          ) : (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
          
        ))}
      </div>
    </section>
  )
}
