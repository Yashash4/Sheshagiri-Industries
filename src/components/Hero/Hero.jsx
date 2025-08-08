import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const videoSources = [
    '/videos/factory-floor.mp4',
    '/videos/stitching-closeup.mp4',
    '/videos/preparation.mp4',
    '/videos/finishing.mp4',
    '/videos/stitching-hall.mp4'
];

const Hero = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, [currentVideoIndex]);

    return (
        <section id="hero" className={styles.hero}>
            {/* Video now acts as a full background */}
            <video
                ref={videoRef}
                key={videoSources[currentVideoIndex]}
                className={styles.heroVideo}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSources[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content panel is now layered on top */}
            <div className={styles.heroContent}>
                <h1 className={styles.headline}>
                    <span className={styles.highlightBox}>Precision</span> Apparel Manufacturing Built on <span className={styles.highlightBox}>30+ Years of Trust</span>
                </h1>
                <p className={styles.subheadline}>
                    We are a vertically integrated garment manufacturer delivering high-quality men's, women’s, and kids’ apparel to global buyers, private labels, and institutional clients.
                </p>
                <div className={styles.ctaButtons}>
                    <a href="#capabilities" className={`${styles.button} ${styles.primary}`}>Explore Capabilities ↗</a>
                    <a href="#contact" className={`${styles.button} ${styles.secondary}`}>Request Quotation →</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;