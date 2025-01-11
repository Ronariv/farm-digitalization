import React from 'react';
import styles from '@/components/ui/StatisticsWeightUpdate/StatisticsWeightUpdate.module.css';
import { statisticsWeightData } from '@/models/statisticsWeightModel';
import { defaultWeightData, WeightData } from '@/models/LivestockModel';
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';
import { useRouter } from 'next/navigation'
import { Livestock } from '@/models/LivestockModel';
import { livestockData } from '@/data/livestockData';

interface StatisticsWeightUpdate{
     livestock: Livestock;
}
type StatisticsWeightUpdateProps = {
    filterBy: 'year' | 'month';
    filterValue: number | string;
    weightData?: WeightData;
    livestock: Livestock;
}

const StatisticsWeightUpdate: React.FC<StatisticsWeightUpdateProps> = ({ filterBy, filterValue, weightData = defaultWeightData, livestock }) => {

    const filteredData = weightData.yearlyData.flatMap((item) => {
        if (filterBy === 'year' && item.year === filterValue) {
          return item.data;
        }
        if (filterBy === 'month') {
          return item.data.filter((data) => data.month === filterValue);
        }
        return [];
      });

    // Hitung rata-rata
    const average =
    filteredData.reduce((acc, cur) => acc + cur.value, 0) / filteredData.length || 0;

          const router = useRouter();
        
            const getPageUrl = () => {
              return "/OwnerViewPage/livestockOwnerPage/[id]/weight";
          };
        
            const handleNavigate = () => {
               const pageUrl = getPageUrl(); // Panggil fungsi getPageUrl
                const dynamicUrl = pageUrl.replace("[id]", livestock.name_id.toLowerCase());
                router.push(dynamicUrl);
            };

  return (
    <div className={styles.container}>
        <div className={styles.tittle}>
            <h3>Berat Ternak</h3>
        </div>

      <div className={styles.header}>
       
        <div>
        <h1>{average} Kg</h1>
        <p>Rata-rata/bulan</p>
        </div>

        <div className={styles.action}>
          <PerbaruiButton 
          label="Perbarui"
          onClick={handleNavigate}
          />
        </div>

      </div>

      <div className={styles.chartContainer}>
        <div className={styles.yAxis}>
            {[20000, 10000, 5000, 2500, 0].map((value, index) => (
            <p key={index} className={styles.yAxisLabel}>
                {value}
            </p>
            ))}
        </div>

        <div className={styles.chart}>
            {filteredData.map((data, index) => (
            <div key={index} className={styles.barContainer}>
                {/* Bar hijau */}
                <div
                className={styles.greenBar}
                style={{ height: '70px', width: '41px' }} 
                ></div>
                {/* Batang grafik */}
                <div
                className={styles.bar}
                style={{ height: `${(data.value / 20000) * 100}%` }}
                ></div>
                <p className={styles.month}>{data.month}</p>
            </div>
            ))}
        </div>
        </div>


      <div className={styles.footer}>
        
      </div>
    </div>
  );
};

export default StatisticsWeightUpdate;
