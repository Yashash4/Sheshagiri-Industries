import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          <span className={styles.highlightText}>Precision</span> Apparel Manufacturing Built on <span className={styles.highlightText}>30+ Years of Trust</span>
        </h1>
        <p className={styles.subheadline}>
          We are a vertically integrated garment manufacturer delivering high-quality men's, women’s, and kids’ apparel to global buyers, private labels, and institutional clients.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#capabilities" className={`${styles.button} ${styles.primary}`}>Explore Capabilities</a>
          <a href="#contact" className={`${styles.button} ${styles.secondary}`}>Request Quotation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;