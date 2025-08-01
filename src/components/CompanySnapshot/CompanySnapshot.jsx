import React from 'react';
import styles from './CompanySnapshot.module.css';

const SnapshotCard = ({ icon, text }) => (
  <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <p>{text}</p>
  </div>
);

const CompanySnapshot = () => {
  return (
    <section id="snapshot" className={styles.snapshotSection}>
      <div className="container">
        <div className={styles.grid}>
          <SnapshotCard icon="🏭" text="30+ Years of Manufacturing Experience" />
          <SnapshotCard icon="📦" text="Scalable Production: 1M+ pcs/annually" />
          <SnapshotCard icon="🌐" text="Clients Across India, UK, UAE & Europe" />
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;