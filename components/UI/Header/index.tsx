import React from 'react';
import SearchInput from '../Search';
import styles from './header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <img src="/vercel.svg" alt="logo"/>
        </div>
        <div className={styles.nav}>
          <div className={styles.nav_left}>
            <SearchInput />
          </div>
          <div className={styles.nav_right}>
            <div>
              photo
            </div>
            <div>config</div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
