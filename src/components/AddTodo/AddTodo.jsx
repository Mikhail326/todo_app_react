import React, { useState } from 'react'
import s from './AddTodo.module.css'
import { postDataAPI } from '../../api'
import { useEffect } from 'react'

export const AddTodo = ({ getData}) => {

  const [value, setValue] = useState('')
  const [stateErorr, setStateErorr] = useState(false)
  const [erorr, setErorr] = useState('field cannot be empty')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (erorr || !value) {
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [erorr, value])

  const blurHandler = (e) => {
    if (e.target.name === 'add') {
      setStateErorr(true)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    if (!e.target.value) {
      setErorr('field cannot be empty')
    }
    else {
      setErorr('')
    }
  }

  const addTodoItem = async () => {
    if (value) {
      await postDataAPI(value)
      getData()
      setValue('')
    }
  }

  const keyPress = (e) => {
    const code = e.keyCode || e.which
    if (code === 13) {
      addTodoItem()
    }
  }
  return (
    <>
      <div className={s.wrapper}>
        <input className={s.addTodoInput}
          name='add'
          onBlur={blurHandler}
          placeholder='+ Add a task, press Enter to save'
          value={value}
          onChange={handleChange}
          onKeyPress={keyPress}

        />
        <button className={s.btnAddTodo}
          disabled={!formValid}
          onClick={addTodoItem}
        >Add</button>
      </div>
      {(stateErorr && erorr) && <div className={s.erorr}>{erorr}</div>}
    </>
  )
}
