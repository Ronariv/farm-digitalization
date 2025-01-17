'use state'

import React from 'react';
import styles from './DetailAnimalDiagnosedCard.module.css';

interface DetailAnimalDiagnosedCardProps {
  title: string;
  sehat: number;
  tersedia: number;
  sakit: number;
  hilang: number;
  mati: number;
}

const DetailAnimalDiagnosedCard: React.FC<DetailAnimalDiagnosedCardProps> = ({
  title,
  sehat,
  tersedia,
  sakit,
  hilang,
  mati
  
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
     
     <div className={styles.details}>
      <p>
            <span className={styles.sehat}>{sehat}</span>
            <br/>
            <span>Sehat</span>
      </p>

      <p>
            <span className={styles.tersedia}>{tersedia}</span>
            <br/>
            <span>Tersedia</span>
      </p>

     </div>


      <div className={styles.details}>
        <p>
            <span className={styles.sakit}>{sakit}</span>
            <br/>
            <span>Sakit</span>
        </p>

        <p>
            <span className={styles.hilang}>{hilang}</span>
            <br/>
            <span>Hilang</span>
        </p>

        <p>
            <span className={styles.mati}>{mati}</span>
            <br/>
            <span>Mati</span>
        </p>

      </div>
    </div>
  );
};

export default DetailAnimalDiagnosedCard;
