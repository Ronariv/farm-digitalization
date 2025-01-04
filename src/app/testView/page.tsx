'use client'

import React from 'react';
import SearchBar from "@/components/ui/SearchBar/searchBar";
import FilterButton from '@/components/ui/Filter/filterButton';

const App: React.FC = () =>  {

  const handleFilter = () => {
    alert("Tombol filter di klik");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FilterButton onClick={handleFilter}/>
    </div>
  );
};

export default App;

