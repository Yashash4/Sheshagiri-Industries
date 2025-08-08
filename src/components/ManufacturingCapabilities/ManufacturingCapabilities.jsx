import React, { useState, useEffect, useRef } from 'react';
import styles from './ManufacturingCapabilities.module.css';

const capabilitiesData = [
    { 
        process: "Product Development", 
        details: "Tech pack consultation, sample coordination, fit approvals.",
        video: "/videos/preparation.mp4" 
    },
    { 
        process: "Fabric & Trim Sourcing", 
        details: "Bulk sourcing, quality evaluation, price negotiation, lab testing.",
        video: "/videos/factory-floor.mp4"
    },
    { 
        process: "Production", 
        details: "Cutting, stitching, finishing, embroidery, and printing coordination.",
        video: "/videos/stitching-closeup.mp4" 
    },
    { 
        process: "Compliance", 
        details: "Adherence to worker safety, labor standards, and sustainability.",
        video: "/videos/stitching-hall.mp4" 
    },
    { 
        process: "Final QC & Dispatch", 
        details: "AQL-level inspections, packing protocols, and dispatch coordination.",
        video: "/videos/finishing.mp4" 
    },
];

const ManufacturingCapabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % capabilitiesData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [activeIndex]);

  return (
    <section id="capabilities" className={styles.capabilitiesSection}>
      <div className="container">
        <h2 className={styles.mainHeading}>Our Vertically Integrated Process</h2>
        <div className={styles.showcaseGrid}>
          <div className={styles.processList}>
            {capabilitiesData.map((item, index) => (
              <div 
                key={item.process} 
                className={`${styles.processItem} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <h3>{item.process}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
          <div className={styles.videoContainer}>
            <video 
              ref={videoRef}
              key={capabilitiesData[activeIndex].video} 
              className={styles.videoPlayer}
              src={capabilitiesData[activeIndex].video} 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div className={styles.videoTextOverlay}>
                <h3>{capabilitiesData[activeIndex].process}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCapabilities;