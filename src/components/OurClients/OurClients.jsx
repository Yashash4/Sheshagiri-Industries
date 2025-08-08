import React from 'react';
import styles from './OurClients.module.css';

// Array of local logo paths
const clientLogos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
];

const OurClients = () => {
  return (
    <section className={styles.clientsSection}>
      <div className="container">
        <h2 className={styles.mainHeading}>Our Clients</h2>
        <p className={styles.subheading}>
          We have proudly partnered with leading retail chains, international buyers, and fashion startups across diverse markets.
        </p>
        <div className={styles.logoGrid}>
          {/* Loop through the logos array and display each image */}
          {clientLogos.map((logoUrl, index) => (
            <div className={styles.logoWrapper} key={index}>
              <img src={logoUrl} alt={`Client Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;