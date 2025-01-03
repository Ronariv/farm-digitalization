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
      {label}
    </button>
  );
};

export default DeleteButton;
