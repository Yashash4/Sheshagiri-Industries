import React from 'react';
import styles from './QualityAssurance.module.css';

const qaPoints = [
    "Sample approval and pre-production checks",
    "Daily inline and post-line inspections",
    "AQL standards (1.5/2.5) across production",
    "Lab testing for shrinkage, color fastness, strength",
    "Accurate documentation, packaging, and labeling",
];

const QualityAssurance = () => {
  return (
    <section id="quality" className={styles.qaSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <img src="/images/quality.jpg" alt="Garment quality assurance" />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Our Quality Assurance Process</h2>
            <ul className={styles.list}>
              {qaPoints.map((point, index) => (
                <li key={index}>
                  <svg className={styles.tickIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;