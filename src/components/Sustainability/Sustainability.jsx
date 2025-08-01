import React from 'react';
import styles from './Sustainability.module.css';

const commitments = [
    "Sustainable trims and packaging",
    "Fabric waste reduction through smart cutting layouts",
    "Biodegradable packaging options available",
    "Fair wages and positive work environment across units",
];

const Sustainability = () => {
  return (
    <section className="container">
      <h2 className={styles.mainHeading}>🌱 Sustainability Commitment</h2>
      <p className={styles.subheading}>
          We take pride in operating with environmental responsibility and ethical labor practices.
      </p>
      <div className={styles.grid}>
        {commitments.map((item, index) => (
            <div className={styles.item} key={index}>{item}</div>
        ))}
      </div>
    </section>
  );
};

export default Sustainability;