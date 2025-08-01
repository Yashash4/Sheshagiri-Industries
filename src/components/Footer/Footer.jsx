import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <p>© 2025 Sheshagiri Industries Pvt Ltd. All Rights Reserved.</p>
        <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;