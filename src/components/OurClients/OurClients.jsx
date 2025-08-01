import React from 'react';
import styles from './OurClients.module.css';

const OurClients = () => {
  return (
    <section className={styles.clientsSection}>
      <div className="container">
        <h2 className={styles.mainHeading}>Our Clients</h2>
        <p className={styles.subheading}>
          We have proudly partnered with leading retail chains, international buyers, and fashion startups across diverse markets.
        </p>
        <div className={styles.logoGrid}>
          {/* We will replace these with actual client logos later */}
          <div className={styles.logo}>Client Logo 1</div>
          <div className={styles.logo}>Client Logo 2</div>
          <div className={styles.logo}>Client Logo 3</div>
          <div className={styles.logo}>Client Logo 4</div>
          <div className={styles.logo}>Client Logo 5</div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;