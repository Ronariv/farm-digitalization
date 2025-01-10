'use client'

import React from "react"
import styles from '@/components/ui/DetailLactationCard/DetailLactationCard.module.css'
import ViewMore from "@/components/ui/ViewMore/ViewMore";
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';

interface LactationDetail {
    title: string;
    description: string;
  }
  
  interface DetailLactationCardProps {
    currentLactation: LactationDetail;
    history: LactationDetail[];
  }
  
  const DetailLactationCard: React.FC<DetailLactationCardProps> = ({ currentLactation, history }) => {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>Laktasi Tahun ini</h3>
          <h2>{currentLactation.title}</h2>
          <p className={styles.description}>{currentLactation.description}</p>
        </div>
  
        <div className={styles.history}>
          <h3>Riwayat Laktasi</h3>
          {history.map((item, index) => (
            <div>
            <div key={index} className={styles.historyItem}>
              <strong>{item.title}</strong>
              <p className={styles.description}>{item.description}</p>
                     
            </div>

            
            </div>
           
            
          ))}
        
       
        </div>
    <div>
         <ViewMore />
          </div>
        <div className={styles.action}>
          <PerbaruiButton label="Perbarui" />
        </div>
      </div>
    );
  };
  
  export default DetailLactationCard;