import React from 'react';
import styles from '@/components/ui/PrimaryButton/PrimaryButton.module.css';

interface PrimaryButtonProps {
  onClick?: () => void;
  label?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label = "Ubah Data" }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
