'use client';

import React from 'react';
import styles from '@/components/ui/Logo/Logo.module.css';

const Logo: React.FC = () => {
    return (
      <div className={styles.containerLogo}>
        <div>
          <img src="/IconLogo.svg" alt="Logo Icon" className={styles.logo} />
        </div>
        <div>
          <h1 className={styles.logoTitle}>Ternakku</h1>
        </div>
      </div>
    );
  };
  
  export default Logo;
