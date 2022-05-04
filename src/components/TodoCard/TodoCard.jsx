import s from './TodoCard.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit, FiSave } from 'react-icons/fi'

export const TodoCard = ({ filterTodo,
  deleteTodoItem,
  editTodo,
  saveTodo,
  toggleCompleted,
  edit,
  value,
  setValue }) => {

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const filteredTodo = filterTodo.filter(t => t.completed === false)
  return (
    <div className={s.todoList}>
      <h4>To do ({filteredTodo.length})</h4>
      {filteredTodo.map(t => {
        const { title, id, completed } = t;
        return (
          <div key={id}>
            {
              edit === id ?
                <div className={s.itemTodo}>
                  <input type='checkbox'
                    onChange={() => toggleCompleted(id, completed)}
                    checked={completed}
                  />
                  <input className={s.titleTodo} value={value} autoFocus={true} onChange={handleChange} />
                  <button className={s.editBtn} onClick={() => saveTodo(id, value)}><FiSave /></button>
                </div>
                : <div className={s.itemTodo} >
                  <div>
                    <input type='checkbox'
                      onChange={() => toggleCompleted(id, completed)}
                      checked={completed}
                    />
                  </div>
                  <div className={s.titleTodo}>
                    <span >{title}</span>
                  </div>
                  <div>
                    <button className={s.editBtn} onClick={() => editTodo(id, title)}><FiEdit /></button>
                  </div>
                  <div>
                    <button className={s.deleteBtn} onClick={() => deleteTodoItem(id)} >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
            }

          </div>
        )
      })}
    </div>
  )
}