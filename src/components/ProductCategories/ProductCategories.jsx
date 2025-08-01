import React from 'react';
import styles from './ProductCategories.module.css';

const categories = [
    { name: "Menswear", items: "Casual Shirts, Formal Shirts, Premium Trousers, Cargos, Shorts", color: "#e3f2fd" },
    { name: "Womenswear", items: "Tops, Blouses, Dresses, Casual Bottoms, Skirts, Co-ords", color: "#fce4ec" },
    { name: "Kidswear", items: "Shirts, Dresses, Shackets, Denimwear", color: "#f3e5f5" },
    { name: "Uniforms & Institutional", items: "Corporate uniforms, hospitality apparel, schoolwear, healthcare", color: "#e8f5e9" },
];

const ProductCategories = () => {
  return (
    <section id="products" className="container">
      <h2 className={styles.mainHeading}>Product Categories</h2>
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imagePlaceholder} style={{ backgroundColor: cat.color }}>
              <span>{cat.name}</span>
            </div>
            <div className={styles.content}>
              <h3>{cat.name}</h3>
              <p>{cat.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;