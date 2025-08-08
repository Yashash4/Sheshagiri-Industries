import React from 'react';
import styles from './CompanySnapshot.module.css';

// Icon helper
const Icon = ({ name }) => (
  <svg
    className={styles.iconSvg}
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {name === 'factory' && (
      <path d="M12 22V8.91C12 8.41 12.34 8 12.83 8h2.34C15.66 8 16 8.41 16 8.91V22M17.5 22V6.25c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75V22M22 22V11c0-.55-.45-1-1-1h-1M4 22V11c0-.55-.45-1-1-1H2M10.5 22V4.75A.75.75 0 0 0 9.75 4h-1.5A.75.75 0 0 0 7.5 4.75V22"></path>
    )}
    {name === 'scale' && <path d="m12 14 4-4m-4 4-4-4m4 4V3M3 21h18"></path>}
    {name === 'globe' && (
      <>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"></path>
      </>
    )}
  </svg>
);

const snapshotData = [
  { icon: 'factory', text: '30+ Years of Manufacturing Experience' },
  { icon: 'scale', text: 'Scalable Production: 1M+ pcs/annually' },
  { icon: 'globe', text: 'Clients Across India, UK, UAE & Europe' },
];

const CompanySnapshot = () => {
  return (
    <section className={styles.snapshotSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {snapshotData.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardContent}>
                <div className={styles.icon}>
                  <Icon name={item.icon} />
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;
