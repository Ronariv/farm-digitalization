import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Telusuri', onSearch }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(event.currentTarget.value);
    }
  };

  return (
    <div className={styles.searchBar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm10 10l-4.35-4.35"
        />
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;