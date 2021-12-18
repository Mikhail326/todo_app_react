import s from './NavBar.module.css'
import { BsListCheck } from 'react-icons/bs'
import { memo } from 'react'
const MemoNavBar = () => {
  return (
    <div className={s.navBar}>
      <div className={s.icon}><BsListCheck /></div>
    </div>
  )
}
export const NavBar = memo(MemoNavBar)