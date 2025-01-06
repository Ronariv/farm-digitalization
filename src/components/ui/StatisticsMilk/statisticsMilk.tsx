import React from 'react';
import styles from '@/components/ui/StatisticsMilk/StatisticsMilk.module.css';
import { statisticsMilkData } from '@/models/statisticsMilkModel';

// type StatisticMilkProps = {
//   statisticsMilkData: { month: string; value: number }[]; 
//   average: number;
//   minMonth: string; 
//   maxMonth: string; 
// };

type StatisticMilkProps = {
    filterBy: 'year' | 'month';
    filterValue: number | string;
}

const StatisticMilk: React.FC<StatisticMilkProps> = ({ filterBy, filterValue }) => {

    const filteredData = statisticsMilkData.flatMap((item) => {
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

    // Bulan dengan nilai minimum dan maksimum
    const minMonth =
    filteredData.reduce(
        (prev, cur) => (cur.value < prev.value ? cur : prev),
        filteredData[0] || { month: '-', value: Infinity }
    ).month || '-';

    const maxMonth =
    filteredData.reduce(
        (prev, cur) => (cur.value > prev.value ? cur : prev),
        filteredData[0] || { month: '-', value: -Infinity }
    ).month || '-';

  return (
    <div className={styles.container}>
        <div className={styles.tittle}>
            <h3>Hasil Susu</h3>
        </div>

      <div className={styles.header}>
       
        <div>
        <h1>{average} liter</h1>
        <p>Rata-rata/bulan</p>
        </div>
      

        <div>
          <p>Hasil susu paling sedikit</p>
          <h4 className={styles.minMonth}>{minMonth}</h4>
        </div>
        <div>
          <p>Hasil susu paling banyak</p>
          <h4 className={styles.maxMonth}>{maxMonth}</h4>
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
                style={{ height: '70px', width: '41px' }} // Tinggi tetap, misalnya 10px
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

export default StatisticMilk;
