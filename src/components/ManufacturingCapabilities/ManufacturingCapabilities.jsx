import React from 'react';
import styles from './ManufacturingCapabilities.module.css';

const capabilitiesData = [
    { process: "Product Development", details: "Tech pack consultation, sample coordination, fit approvals" },
    { process: "Fabric & Trim Sourcing", details: "Bulk sourcing, quality evaluation, price negotiation, lab testing" },
    { process: "Production", details: "Cutting, stitching, finishing, embroidery, and printing coordination" },
    { process: "Compliance", details: "Worker safety, labor standards, sustainability sourcing" },
    { process: "Final QC & Dispatch", details: "AQL-level inspections, packing protocols, dispatch coordination" },
];

const ManufacturingCapabilities = () => {
  return (
    <section id="capabilities" className={styles.capabilitiesSection}>
      <div className="container">
        <h2 className={styles.mainHeading}>Manufacturing Capabilities</h2>
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Process Area</div>
                <div className={styles.headerCell}>Details</div>
            </div>
            {capabilitiesData.map((item, index) => (
                <div className={styles.tableRow} key={index}>
                    <div className={styles.processCell}>{item.process}</div>
                    <div className={styles.detailsCell}>{item.details}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCapabilities;