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
    <section className={styles.qaSection}>
      <div className={`${styles.qaContainer} container`}>
        <div className={styles.content}>
            <h2 className={styles.heading}>Our Quality Assurance Process</h2>
            <ul className={styles.list}>
                {qaPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
        <div className={styles.imagePlaceholder}>
            {/* We will replace this with a real photo of quality inspection */}
            <span>Quality Inspection</span>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;