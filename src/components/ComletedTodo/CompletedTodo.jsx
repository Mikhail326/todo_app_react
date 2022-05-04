import s from './CompletedTodo.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

export const CompletedTodo = ({ filterTodo, deleteTodoItem, toggleCompleted }) => {
  
  const filteredTodo = filterTodo.filter(t => t.completed === true)

  return (
    <div className={s.wrapperCompletedTodo}>
      <h4>Completed ({filteredTodo.length})</h4>
      {filteredTodo.map(t => {
        const { title, id, completed } = t;
        return (
          <div className={s.itemTodo} key={t.id}>
            <input type='checkbox'
              onChange={() => toggleCompleted(id, completed)}
              checked={completed}
            />
            <span className={`${s.titleTodo} ${s.completed}`}>{title}</span>
            <button className={s.deleteBtn} onClick={() => deleteTodoItem(id)} >
              <RiDeleteBin6Line />
            </button>
          </div>
        )
      })}
    </div>
  )
}
