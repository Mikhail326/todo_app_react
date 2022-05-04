import s from './TodoList.module.css'
import { useState } from 'react'
import { TodoCard } from '../TodoCard/TodoCard'
import { patchDataAPI } from '../../api'

export const TodoList = ({ filterTodo, getData, deleteTodoItem, toggleCompleted }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState(null)
  
  const editTodo = async (id, value) => {
    setEdit(id)
    setValue(value)
  }
  const saveTodo = async (id, title) => {
    await patchDataAPI(id, title)
    getData()
    setEdit(null)
  }

  return (
    <div>
      <span className={s.totalTodo}>Total: {filterTodo.length}</span>
      <TodoCard filterTodo={filterTodo}
        edit={edit}
        value={value}
        setValue={setValue}
        deleteTodoItem={deleteTodoItem}
        editTodo={editTodo}
        saveTodo={saveTodo}
        toggleCompleted={toggleCompleted} />
    </div>
  )
}
