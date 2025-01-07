'use state'

import React from 'react';
import styles from './DetailAnimalMaleCard.module.css';

interface DetailAnimalFemaleCardProps {
  title: string;
  total: number;
  pedet: number;
  siapKawin: number;
}

const DetailAnimalMaleCard: React.FC<DetailAnimalFemaleCardProps> = ({
  title,
  total,
  pedet,
  siapKawin
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
            <span className={styles.pedet}>{pedet}</span>
            <br/>
            <span>Pedet</span>
        </p>

        <p>
            <span className={styles.siapKawin}>{siapKawin}</span>
            <br/>
            <span>Siap Kawin</span>
        </p>
      </div>
    </div>
  );
};

export default DetailAnimalMaleCard;
