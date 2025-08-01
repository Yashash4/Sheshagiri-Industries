import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.mainHeading}>Contact Us</h2>
        <p className={styles.subheading}>
          Get in touch with our team for manufacturing inquiries, capacity planning, or R&D collaboration.
        </p>
        <div className={styles.grid}>
          <div className={styles.details}>
            <h3>Factory & Office Address:</h3>
            <p>
              No. 4, 1st Main Road, Sri Annapoorneshwari Layout,
              Nimbekaipura, Behind Orion Uptown Mall,
              Hosakote Main Road, Bengaluru, Karnataka – 560049
            </p>
            <h3>Email:</h3>
            <p><a href="mailto:director@sheshagiriindustries.com">director@sheshagiriindustries.com</a></p>
            <h3>Phone:</h3>
            <p>
              <a href="tel:+919844060670">+91 98440 60670</a> / <a href="tel:+916363666309">+91 63636 66309</a>
            </p>
            <div className={styles.contactButtons}>
                <a href="https://wa.me/919844060670" target="_blank" rel="noopener noreferrer" className={styles.button}>WhatsApp Business</a>
                <a href="/documents/company-profile.pdf" download className={styles.button}>Download Profile</a>
            </div>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="company" placeholder="Company Name" />
                <textarea name="message" rows="5" placeholder="Your Inquiry" required></textarea>
                <button type="submit" className={styles.submitButton}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;