'use client'

import { useRouter } from 'next/navigation';
import styles from './TabNavigation.module.css';

const TabNavigation = () => {
  const router = useRouter();

  const tabs = [
    { id: 1, label: "Data Ternak", path: "/OwnerViewPage/livestockOwnerPage/addTernakPage", active: true },
    { id: 2, label: "Data Detail Ternak", path: "/OwnerViewPage/livestockOwnerPage/dataDetailTernakPage" },
    { id: 3, label: "Kesehatan Ternak", path: "/OwnerViewPage/livestockOwnerPage/kesehatanTernakPage" },
    { id: 4, label: "Laktasi", path: "/OwnerViewPage/livestockOwnerPage/laktasiTernakPage" },
    { id: 5, label: "Pemerahan", path: "/OwnerViewPage/livestockOwnerPage/pemerahanPage" },
  ];

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(tab.path)}
          className={`${styles.tabItem} ${tab.active ? styles.activeTab : ""}`}
        >
          <span className={styles.tabIcon}>{tab.id}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
