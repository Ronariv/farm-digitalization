'use client'

import React, { useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
// import HealthStatus from "@/components/ui/healthStatus"; 
// import GenderIcon from '@/components/ui/genderIcon';
import EditButton from '@/components/ui/EditButton/editButton';
import AddButton from '@/components/ui/AddButton/addButton';
import InviteOperatorButton from '@/components/ui/InviteOperatorButton/inviteOperatorButton';
import UpdateButton from '@/components/ui/UpdateButton/updateButton';
import PrintButton from '@/components/ui/PrintButton/printButton';
import FilterButton from '@/components/ui/Filter/filterButton';
import SortByButton from '@/components/ui/SortBy/sortBy';
import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
import Sidebar from '@/components/ui/Sidebar/sidebar';
import SearchBar from '@/components/ui/SearchBar/searchBar';
import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '@/models/animalCategories';

const App: React.FC = () => {
//   const [phases, setPhases] = useState(phaseLabels);
//   const kondisi: StatusType = "sehat";
    // const handleClick = () => {
    //     alert("Tombol Ubah Data diklik!");
    // };

    // const handleAdd = () => {
    //     alert("Tombol Hapus Ternak diklik!");
    // };

    // const handleInvite = () => {
    //     alert("Tombol Invite Ternak diklik!");
    // };
    const handleUpdate = () => {
        alert("Tombol Invite Ternak diklik!");
    };

    const handlePrint = () => {
        alert("Tombol print sudah diklik!");
    };

    const handleFilter = () => {
      alert("Tombol filter di klik");
    };

    const handleSortBy = () => {
      alert("Tombol sort di klik");
    };

    return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="content">
        <div className="menuSection">
          <div className="menuHeader">
            <h1 className="menuTittle">Statistik</h1>
            <div className="yearAndMonthPicker">
              <YearAndMonthPicker/>
            </div>
          </div>
          <div className="animalCategoriesCard">
            {animalCategories.map((category) => (
              <CategoryAnimalCard
                key={category.type}
                icon={category.icon}
                title={category.title}
                total={category.total}
                maleCount={category.maleCount}
                femaleCount={category.femaleCount}
              />
            ))}
          </div>
        </div>
      </div>

      </div>
    </div>
    );
};

export default App;
