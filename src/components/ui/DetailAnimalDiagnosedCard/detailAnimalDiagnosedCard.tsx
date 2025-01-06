'use state'

import React from 'react';
import styles from './DetailAnimalDiagnosedCard.module.css';

interface DetailAnimalDiagnosedCardProps {
  title: string;
  total: number;
  sakit: number;
  hilang: number;
}

const DetailAnimalMaleCard: React.FC<DetailAnimalDiagnosedCardProps> = ({
  title,
  total,
  sakit,
  hilang
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p  className={styles.total}>
        <span className={styles.totalNumber}>{total}</span>
      </p>
      <p className={styles.ekor}>Ekor</p>

      <div className={styles.details}>
        <p>
            <span className={styles.pedet}>{sakit}</span>
            <br/>
            <span>Sakit</span>
        </p>

        <p>
            <span className={styles.siapKawin}>{hilang}</span>
            <br/>
            <span>Hilang</span>
        </p>
      </div>
    </div>
  );
};

export default DetailAnimalMaleCard;
