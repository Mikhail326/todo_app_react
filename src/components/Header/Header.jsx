import s from './Header.module.css'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { memo, useState, useEffect } from 'react'
import Select from 'react-select'

const MemoHeader = ({ onHandler }) => {

  const [userId, setUserId] = useState('')

  useEffect(() => {
    onHandler(userId.id)
  }, [userId])

  const data = [
    { id: 1, label: 'UserID 1', value: 'UserID 1' },
    { id: 2, label: 'UserID 2', value: 'UserID 2' },
    { id: 3, label: 'UserID 3', value: 'UserID 3' },
    { id: 4, label: 'UserID 4', value: 'UserID 4' },
    { id: 5, label: 'UserID 5', value: 'UserID 5' },
    { id: 6, label: 'UserID 6', value: 'UserID 6' },
    { id: 7, label: 'UserID 7', value: 'UserID 7' },
    { id: 8, label: 'UserID 8', value: 'UserID 8' },
    { id: 9, label: 'UserID 9', value: 'UserID 9' },
    { id: 10, label: 'UserID 10', value: 'UserID 10' }
  ]

  return (
    <div className={s.header}>
      <div className={s.icon}>
        <BsFillBagCheckFill />
        <span>To-Do</span>
      </div>
      <h2 className={s.title}>Tasks</h2>
      <div className={s.select}>
        <Select options={data}
          value={userId}
          onChange={setUserId} />
      </div>
    </div>
  )
}
export const Header = memo(MemoHeader)