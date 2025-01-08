import React from 'react';
import styles from '@/components/ui/PrimaryButton/PrimaryButton.module.css';

interface PrimaryButtonProps {
  onClick?: () => void;
  label?: string;
  width?: number;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label = "Ubah Data", width = 100}) => {
  return (
    <button className={styles.button} onClick={onClick} style={{ width: `${width}px` }} >
      {label}
    </button>
  );
};

export default PrimaryButton;
