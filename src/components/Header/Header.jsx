import s from './Header.module.css'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { memo } from 'react'
const MemoHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.icon}>
        <BsFillBagCheckFill />
        <span>To-Do</span>
      </div>
      <h2 className={s.title}>Tasks</h2>
    </div>
  )
}
export const Header = memo(MemoHeader)