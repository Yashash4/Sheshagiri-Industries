import React from 'react';
import styles from './WhyUs.module.css';

const reasons = [
    "Proven Track Record in Bulk Garment Supply",
    "Scalable Production with Reliable Timelines",
    "In-House Technical Team & Merchandising Support",
    "On-Ground Vendor Control for Fabric & Trims",
    "Strong Compliance Framework & Ethical Standards",
    "Dedicated Client Servicing & Reporting Structure",
];

const WhyUs = () => {
  return (
    <section className="container">
      <h2 className={styles.mainHeading}>Why Sheshagiri Industries</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div className={styles.reasonCard} key={index}>
            <span className={styles.tick}>✅</span>
            <p>{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;