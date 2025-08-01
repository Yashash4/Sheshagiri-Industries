import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id="about" className="container">
      <div className={styles.aboutContent}>
        <div className={styles.legacy}>
          <h2 className={styles.heading}>Legacy in Manufacturing. Commitment to Excellence.</h2>
          <p>
            Sheshagiri Industries Pvt Ltd. is a family-owned, professionally run apparel manufacturing company based in Bengaluru, India. With a focus on consistency, compliance, and client satisfaction, we’ve served as the backbone for brands, export houses, and institutional buyers since 1991.
          </p>
          <p>
            We specialize in wovens and knits across menswear, womenswear, and kidswear, with full control over the production cycle — from fabric sourcing to final dispatch.
          </p>
        </div>
        <div className={styles.missionVision}>
          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>To be a globally respected manufacturing partner, known for delivering high-quality garments through ethical processes, technical innovation, and long-term partnerships.</p>
          </div>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>To offer reliable, scalable, and on-time apparel manufacturing solutions while upholding global standards in quality, labor compliance, and client service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;