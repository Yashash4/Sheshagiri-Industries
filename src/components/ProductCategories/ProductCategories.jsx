import React, { useState, useRef } from 'react';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
// Import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';

import styles from './ProductCategories.module.css';

const categories = [
    { 
        name: "Menswear", 
        description: "Precision-crafted formal and casual shirts, trousers, and shorts designed for the modern man. We focus on fit, fabric, and flawless finishing.",
        image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
        name: "Womenswear", 
        description: "An elegant range of tops, blouses, dresses, and co-ord sets. We bring contemporary designs to life with a focus on quality and detail.",
        // --- NEW, WORKING IMAGE LINK ---
        image: "https://images.pexels.com/photos/3755919/pexels-photo-3755919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
        name: "Kidswear", 
        description: "Vibrant and comfortable apparel for children, including durable shirts, dresses, and denimwear, made with safe, high-quality materials.",
        // --- NEW, WORKING IMAGE LINK ---
        image: "https://images.pexels.com/photos/5623675/pexels-photo-5623675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
        name: "Uniforms", 
        description: "Durable and professional uniforms for corporate, hospitality, and institutional clients, designed for comfort and long-lasting wear.",
        // --- NEW, WORKING IMAGE LINK ---
        image: "https://images.pexels.com/photos/7144171/pexels-photo-7144171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

const loopedCategories = [...categories, ...categories];

const ProductCategories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section id="products" className={styles.productSection}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h2 className={styles.mainHeading}>{categories[activeIndex].name}</h2>
                    <p>{categories[activeIndex].description}</p>
                    
                    <div className={styles.actions}>
                        <button ref={prevRef} className={styles.navButton}>Prev</button>
                        <button ref={nextRef} className={styles.navButton}>Next</button>
                    </div>
                </div>

                <Swiper
                    onSlideChange={(swiper) => {
                        const correctIndex = swiper.realIndex % categories.length;
                        setActiveIndex(correctIndex);
                    }}
                    className={styles.swiper}
                    modules={[EffectCoverflow, Navigation]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                >
                    {loopedCategories.map((cat, index) => (
                        <SwiperSlide key={`${cat.name}-${index}`} className={styles.swiperSlide}>
                            <img src={cat.image} alt={cat.name} />
                            <div className={styles.overlay}>
                                <h2>{cat.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCategories;