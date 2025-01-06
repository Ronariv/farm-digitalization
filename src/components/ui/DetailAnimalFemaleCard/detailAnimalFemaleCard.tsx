'use state'

import React from 'react';
import styles from './DetailAnimalFemaleCard.module.css';

interface DetailAnimalFemaleCardProps {
  title: string;
  total: number;
  pedet: number;
  dara: number;
  siapKawin: number;
  hamil: number;
  menyusui: number;
}

const DetailAnimalFemaleCard: React.FC<DetailAnimalFemaleCardProps> = ({
  title,
  total,
  pedet,
  dara,
  siapKawin,
  hamil,
  menyusui,
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
            <span className={styles.dara}>{dara}</span>
            <br/>
            <span>Dara</span>
        </p>

        <p>
            <span className={styles.siapKawin}>{siapKawin}</span>
            <br/>
            <span>Siap Kawin</span>
        </p>

      </div>

      <div className={styles.details2}>
        <p>
            <span className={styles.hamil}>{hamil}</span>
            <br />
            <span>Hamil</span>
        </p>
        <p>
            <span className={styles.menyusui}>{menyusui}</span>
            <br />
            <span>Menyusui</span>
        </p>
    </div>
    

    </div>
  );
};

export default DetailAnimalFemaleCard;
