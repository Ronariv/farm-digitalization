'use client';

import React, { useState } from 'react';
import styles from '@/components/ui/YearAndMonthPicker/YearAndMonthPicker.module.css'; // Buat style file ini nanti

// const months = [
//   "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
//   "Juli", "Agustus", "September", "Oktober", "November", "Desember"
// ];

const YearAndMonthPicker: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);

  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<"tab2" | null>(null);

  const handleYearSelect = (year: number) => {
    setSelectedValue(year);
    setActiveDropdown(null); // Tutup dropdown setelah memilih tahun
  };

  return (
    <div className={styles.container}>
      {/* Tab Pertama */}
      <div className={styles.tabContainer}>
        <div className={`${styles.tab} ${styles.leftTab}`}>
          Tahun
        </div>
      </div>

      {/* Tab Kedua */}
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${styles.rightTab}`}
          onClick={() => setActiveDropdown(activeDropdown === "tab2" ? null : "tab2")}
        >
          {selectedValue || "Pilih"}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              className="dropdownIcon"
              fill="none"
            >
              <path
                d="M4.5 6L8.5 10L12.5 6"
                stroke="#248543"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {activeDropdown === "tab2" && (
          <div className={styles.dropdown}>
            {years.map((year, index) => (
              <button
                key={index}
                className={`${styles.dropdownItem} tab2`}
                onClick={() => handleYearSelect(year)}
              >
                {year}
                {selectedValue === year && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1162_11826)">
                        <path
                          d="M6.42728 16C6.81818 16 7.12727 15.8278 7.34546 15.4924L15.9363 2.00338C16.1 1.74049 16.1637 1.54106 16.1637 1.33256C16.1637 0.833976 15.8364 0.507629 15.3364 0.507629C14.9728 0.507629 14.7727 0.625476 14.5546 0.969951L6.3909 13.9422L2.15454 8.41246C1.92727 8.09517 1.7 7.96826 1.37273 7.96826C0.854545 7.96826 0.5 8.3218 0.5 8.82039C0.5 9.02889 0.590909 9.26459 0.763636 9.48211L5.48182 15.4742C5.75454 15.8278 6.03637 16 6.42728 16Z"
                          fill="#FFFFFF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1162_11826">
                          <rect
                            width="16"
                            height="16"
                            fill="FFFFFF"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

  
  export default YearAndMonthPicker;