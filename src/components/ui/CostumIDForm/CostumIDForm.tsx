'use client'

import React from 'react';
import styles from "@/components/ui/CostumIDForm/CostumIDForm.module.css";

const CustomIDForm: React.FC = () => {
  return (
    <div className={styles.customidForm}>
      <h1 className={styles.formTitle}>Kustomisasi Format ID Ternak</h1>

      {/* Sapi */}
      <div className={styles.idRow}>
        <img src="/sapi.svg" alt="Sapi Icon" className={styles.animalIcon} />
        <span className={styles.animalName}>Sapi</span>
        <input type="text" className={styles.prefixInput} placeholder="Contoh: SP" />
        <input type="text" className={styles.idInput} value="0001" disabled />
      </div>

      {/* Kambing */}
      <div className={styles.idRow}>
        <img src="/kambing.svg" alt="Kambing Icon" className={styles.animalIcon} />
        <span className={styles.animalName}>Kambing</span>
        <input type="text" className={styles.prefixInput} placeholder="Contoh: KB" />
        <input type="text" className={styles.idInput} value="0001" disabled />
      </div>

      {/* Domba */}
      <div className={styles.idRow}>
        <img src="/domba.svg" alt="Domba Icon" className={styles.animalIcon} />
        <span className={styles.animalName}>Domba</span>
        <input type="text" className={styles.prefixInput} placeholder="Contoh: DBA" />
        <input type="text" className={styles.idInput} value="0001" disabled />
      </div>
    </div>
  );
};

export default CustomIDForm;