'use client'

import React from 'react';
import styles from './DeleteButton.module.css';

interface DeleteButtonProps {
  onClick?: () => void;
  label?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label = "Hapus Ternak" }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
        <path d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.196 17.021 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.021 17.8043 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#D21C1C"/>
      </svg>
    </button>
  );
};

export default DeleteButton;
