import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactContainer}>
          {/* Left Column: Contact Info */}
          {/* The backgroundImage is now set here directly */}
          <div 
            className={styles.infoSide} 
            style={{ backgroundImage: `url('/images/factory.jpg')` }}
          >
            <h2 className={styles.heading}>Get in Touch</h2>
            
            <div style={{ flexGrow: 1 }}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Bengaluru Studio</h4>
                  <p>No. 4, 1st Main Road, Sri Annapoorneshwari Layout, Nimbekaipura, Behind Orion Uptown Mall, Hosakote Main Road, Bengaluru - 560049</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:director@sheshagiriindustries.com">director@sheshagiriindustries.com</a></p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81 .7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+919844060670">+91 98440 60670</a> / <a href="tel:+916363666309">+91 63636 66309</a></p>
                </div>
              </div>
            </div>

            <div className={styles.actionButtons}>
                <a href="tel:+919844060670" className={`${styles.button} ${styles.primary}`}>Request a Callback →</a>
                <a href="https://wa.me/919844060670" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.secondary}`}>WhatsApp Us</a>
                <a href="/documents/company-profile.pdf" download className={`${styles.button} ${styles.secondary}`}>Start Your Project</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formSide}>
            <h2 className={styles.heading}>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
              </div>
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="company" placeholder="Company" />
              <input type="text" name="projectType" placeholder="Project Type (e.g., Women's wear...)" />
              <textarea name="message" rows="5" placeholder="Tell us about your project requirements..." required></textarea>
              <button type="submit" className={`${styles.button} ${styles.primary}`}>Send Message →</button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.643911555933!2d77.7555434758835!3d13.05831831267811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f7d129ba4c5%3A0x9f43c4c72c5d7af8!2sSheshagiri%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1723053429999!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;