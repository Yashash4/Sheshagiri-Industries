import React from 'react';
import styles from './Sustainability.module.css';

const Icon = ({ name }) => (
    <svg className={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {name === 'materials' && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>}
      {name === 'waste' && <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"></path>}
      {name === 'labor' && <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></>}
      {name === 'water' && <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z"></path>}
    </svg>
);

const commitments = [
    { 
        icon: "materials",
        title: "Eco-Friendly Materials", 
        text: "Utilizing sustainable trims and biodegradable packaging options."
    },
    { 
        icon: "waste",
        title: "Waste Reduction", 
        text: "Implementing smart cutting layouts and recycling programs to minimize waste."
    },
    { 
        icon: "labor",
        title: "Ethical Labor", 
        text: "Ensuring fair wages, safe conditions, and a positive work environment."
    },
    { 
        icon: "water",
        title: "Water Conservation", 
        text: "Adopting advanced dyeing and finishing processes to reduce water consumption."
    },
];

const Sustainability = () => {
  return (
    <section className={styles.sustainabilitySection}>
        <h2 className={styles.mainHeading}>Sustainability Commitment</h2>
        <div className={styles.cardContainer}>
          {commitments.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={styles.box}>
                <div className={styles.content}>
                  <div className={styles.iconWrapper}>
                    <Icon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Sustainability;