import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu, can be used on links
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          Sheshagiri Industries Pvt Ltd
        </a>
        
        {/* Navigation Menu */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#capabilities" onClick={closeMenu}>Capabilities</a></li>
            <li><a href="#products" onClick={closeMenu}>Products</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;