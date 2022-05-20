import React, { useState } from "react";
import { useRouter } from 'next/router';
import HeaderLogo from "./headerlogo";
import styles from "./headermenu.module.css";
const HeaderMenu = () => {
  const [isMobile, setMobile] = useState(false);
  const router = useRouter();
  const movetohome = () => {
    router.push('/');
  } 
  const movetoproducts = () => {
    router.push('/products');
  }
  const movetoabout = () => {
    console.log('about');
    router.push('/about');
  }
  const handlelogin = () =>{
    console.log('login');
    router.replace('/user/login');
  }
  return (
    <div className={styles.headermenu}>
      <nav className={styles.headermenu__menu}>
        <div className={styles.headermenu__menulogo}>
          <HeaderLogo />
        </div>
        <ul className={styles.headermenu__menuitems}>
          <li className={styles.headermenu__menuitem} onClick={movetohome}>HOME</li>
          <li className={styles.headermenu__menuitem} onClick={movetoproducts}>PRODUCTS</li>
          <li className={styles.headermenu__menuitem} onClick={movetoabout}>ABOUT</li>
          <li className={styles.headermenu__menuitem}>CONTACT</li>
          <button className={styles.headermenu__menulogin} onClick={handlelogin}>Login/SignUp</button>
        </ul>
        <button className={styles.headermenu__menubutton} onClick={() => {isMobile?setMobile(false) : setMobile(true)}}>
          Menu
        </button>
      </nav>
      <nav>
        {isMobile ? (
          <ul className={styles.headermenumoblie__menuitems}>
            <li className={styles.headermenumobile__menuitem} onClick={movetohome}>HOME</li>
            <li className={styles.headermenumobile__menuitem} onClick={movetoproducts}>PRODUCTS</li>
            <li className={styles.headermenumobile__menuitem} onClick={movetoabout}>ABOUT</li>
            <li className={styles.headermenumobile__menuitem}>CONTACT</li>
            <li className={styles.headermenumobile__menuitem}>
            </li>
            <li className={styles.headermenumobile__menuitem}>
              <button className={styles.headermenumobile__menulogin} onClick={handlelogin}>Login/SignUp</button>
            </li>
          </ul>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default HeaderMenu;
