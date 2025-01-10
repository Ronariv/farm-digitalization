import React from 'react';
import styles from '@/components/ui/PrimaryTextField/PrimaryTextField.module.css';

interface PrimaryTextFieldProps {
  label?: string;
  placeholder?: string;
  width?: number;
  style?: React.CSSProperties;
  className?: string;
}

const PrimaryTextField: React.FC<PrimaryTextFieldProps> = ({ placeholder = "", label = "", width=400, style, className}) => {
  return (
    <div className={`${styles.textField} ${className}`} style={style}>
        <h1>{label}</h1>
        <input type="text" placeholder={placeholder} style={{ width: `${width}px` }} />
    </div>
  );
};

export default PrimaryTextField;
