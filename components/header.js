import React from 'react'
import HeaderMenu from './headermenu'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <HeaderMenu />
    </div>
  )
}

export default Header