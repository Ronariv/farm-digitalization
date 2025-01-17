'use client'

import React from "react"
import styles from '@/components/ui/DetailLactationCard/DetailLactationCard.module.css'
import ViewMore from "@/components/ui/ViewMore/ViewMore";
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';
import { Livestock } from '@/models/LivestockModel';
import { useRouter } from 'next/navigation'

interface LactationDetail {
  title: string;
  description: string;
  livestock?: Livestock;
}

interface DetailLactationCardProps {
  currentLactation?: LactationDetail;
  history?: LactationDetail[];
  livestock?: Livestock;
}

const DetailLactationCard: React.FC<DetailLactationCardProps> = ({ currentLactation, history, livestock }) => {
  const router = useRouter();

  const getPageUrl = () => {
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    return "/defaultView/[id]/lactation";
  };

  const handleNavigate = () => {
    const pageUrl = getPageUrl();
    const dynamicUrl = pageUrl.replace("[id]", livestock != null ? `${livestock.id}` : "");
    router.push(dynamicUrl);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Laktasi Tahun ini</h3>
        {/* Render title and description only if currentLactation is provided */}
        <h2>{currentLactation?.title ?? "No current lactation data"}</h2>
        <p className={styles.description}>
          {currentLactation?.description ?? "No description available"}
        </p>
      </div>

      <div className={styles.history}>
        <h3>Riwayat Laktasi</h3>
        {/* Only map through history if it's provided */}
        {history && history.length > 0 ? (
          history.map((item, index) => (
            <div key={index} className={styles.historyItem}>
              <strong>{item.title}</strong>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No lactation history available.</p>
        )}
      </div>

      <div>
        <ViewMore />
      </div>

      <div className={styles.action}>
        <PerbaruiButton label="Perbarui" onClick={handleNavigate} />
      </div>
    </div>
  );
};

export default DetailLactationCard;
