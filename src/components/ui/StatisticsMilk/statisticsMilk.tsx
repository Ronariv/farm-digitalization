import React from 'react';
import styles from '@/components/ui/StatisticsMilk/StatisticsMilk.module.css';
import { MilkData } from '@/models/LivestockModel';

type StatisticMilkProps = {
  filterBy: 'year' | 'month';
  filterValue: number | string;
  milkData?: MilkData;
};

const StatisticMilk: React.FC<StatisticMilkProps> = ({
  filterBy,
  filterValue,
  milkData,
}) => {
  if (!milkData) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Hasil Susu</h3>
        </div>
        <p className={styles.errorMessage}>Data susu tidak tersedia.</p>
      </div>
    );
  }

  const filteredData = milkData.yearlyDatas.flatMap((item) => {
    if (filterBy === 'year' && item.year === filterValue) {
      return item.monthlyDatas;
    }
    if (filterBy === 'month') {
      return item.monthlyDatas.filter((data) => data.month === filterValue);
    }
    return [];
  });

  const average =
    filteredData.reduce((acc, cur) => acc + cur.value, 0) / filteredData.length || 0;

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
      <div className={styles.title}>
        <h3>Hasil Susu</h3>
      </div>

      <div className={styles.header}>
        <div>
          <h1>{average.toFixed(2)} liter</h1>
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
              {/* Green Bar */}
              <div
                className={styles.greenBar}
                style={{ height: `${(data.value / 20000) * 100}%`, width: '41px' }}
              ></div>
              {/* Bar */}
              <div
                className={styles.bar}
                style={{ height: `${(data.value / 20000) * 100}%` }}
              ></div>
              <p className={styles.month}>{data.month}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}></div>
    </div>
  );
};

export default StatisticMilk;
