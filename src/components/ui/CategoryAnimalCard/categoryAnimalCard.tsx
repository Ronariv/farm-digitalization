'use client'

import React from 'react';
import styles from './CategoryAnimalCard.module.css';

interface CategoryAnimalCardProps {
  icon: React.ReactNode; // Icon, bisa berupa SVG atau JSX element
  title: string; // Nama kategori, misalnya "Sapi"
  total: number; // Total ekor
  maleCount: number; // Jumlah jantan
  femaleCount: number; // Jumlah betina
}

const CategoryAnimalCard: React.FC<CategoryAnimalCardProps> = ({
  icon,
  title,
  total,
  maleCount,
  femaleCount,
}) => {
  return (
    <div className={styles.card}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div> 
        <h3 className={styles.title}>{title}</h3>
          <div className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="36" viewBox="0 0 25 36" fill="none">
              <g clipPath="url(#clip0_1159_10132)">
                <path d="M24.311 17.9897C24.311 17.482 24.1078 17.0149 23.7218 16.6493L7.63684 0.88919C7.27125 0.54393 6.82445 0.361145 6.2964 0.361145C5.26063 0.361145 4.44824 1.15321 4.44824 2.2093C4.44824 2.71704 4.65134 3.18415 4.9763 3.52942L19.7616 17.9897L4.9763 32.4501C4.65134 32.7953 4.44824 33.242 4.44824 33.7703C4.44824 34.8263 5.26063 35.6183 6.2964 35.6183C6.82445 35.6183 7.27125 35.4355 7.63684 35.0701L23.7218 19.3302C24.1078 18.9443 24.311 18.4975 24.311 17.9897Z" fill="#248543"/>
              </g>
              <defs>
                <clipPath id="clip0_1159_10132">
                  <rect width="24.3105" height="35.2775" fill="white" transform="translate(0 0.361237)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
      </div>

      {/* Body */}
      <div className={styles.totalSection}>
        <span className={styles.total}>{total}</span>
        <span className={styles.totalLabel}>Total Ekor</span>
      </div>

      {/* Footer */}
      <div className={styles.genderSection}>
        <div className={styles.gender}>
          <span className={styles.genderCount}>{maleCount}</span>
          <span className={styles.genderLabel}>Jantan</span>
        </div>
       
       <div className={styles.spaceGender}></div>

        <div className={styles.gender}>
          <span className={styles.genderCount}>{femaleCount}</span>
          <span className={styles.genderLabel}>Betina</span>
        </div>
      </div>

    </div>
  );
};

export default CategoryAnimalCard;