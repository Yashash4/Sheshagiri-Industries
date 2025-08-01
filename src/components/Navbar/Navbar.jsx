import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>Sheshagiri Industries</a>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;