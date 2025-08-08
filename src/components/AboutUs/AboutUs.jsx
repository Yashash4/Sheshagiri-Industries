import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.legacy}>
          <h2 className={styles.heading}>A Legacy in Manufacturing. A Commitment to Excellence.</h2>
          <p>
            Sheshagiri Industries Pvt Ltd. is a <span className={styles.highlight}>family-owned</span>, professionally run apparel manufacturing company based in Bengaluru, India. With a focus on <span className={styles.highlight}>consistency, compliance, and client satisfaction</span>, we’ve served as the backbone for brands, export houses, and institutional buyers <span className={styles.highlight}>since 1991</span>.
          </p>
          <p>
            We specialize in <span className={styles.highlight}>wovens and knits</span> across menswear, womenswear, and kidswear, with full control over the production cycle — from fabric sourcing to final dispatch.
          </p>
        </div>
        <div className={styles.missionVision}>
          {/* Vision Card */}
          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>To be a <span className={styles.highlight}>globally respected</span> manufacturing partner, known for delivering high-quality garments through ethical processes, technical innovation, and long-term partnerships.</p>
          </div>

          {/* Mission Card */}
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>To offer <span className={styles.highlight}>reliable, scalable, and on-time</span> apparel manufacturing solutions while upholding global standards in quality, labor compliance, and client service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;