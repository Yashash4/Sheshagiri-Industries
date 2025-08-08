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

// A simple SVG component for a clean checkmark icon
const CheckmarkIcon = () => (
  <svg 
    className={styles.tickIcon} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const WhyUs = () => {
  return (
    <section className="container">
      <h2 className={styles.mainHeading}>Why Sheshagiri Industries</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div className={styles.reasonCard} key={index}>
            <div className={styles.iconWrapper}>
              <CheckmarkIcon />
            </div>
            <p>{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;