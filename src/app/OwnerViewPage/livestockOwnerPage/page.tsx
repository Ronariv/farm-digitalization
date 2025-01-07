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
import OperatorProfile from '@/components/ui/OperatorProfile/operatorProfile';
import Image from 'next/image';
import OwnerProfile from '@/components/ui/OwnerProfile/ownerProfile';
import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
import { usePathname } from 'next/navigation';

const App: React.FC = () => {

  const [breadcrumb, setBreadcrumb] = useState('Statistik');

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

    function getMenuLabel(pathname: string): string {
      switch (pathname) {
        case '/OwnerViewPage/page.tsx':
          return 'Statistik';
        case '/livestockOwnerPage':
          return 'Ternak Anda';
        case '/activityOwnerPage':
          return 'Aktivitas';
        case '/settingsOwnerPage':
          return 'Pengaturan';
        default:
          return 'Halaman Tidak Ditemukan';
      }
    }

    return (
    <div className="layout">
      <div className="sidebar">
      <Sidebar setBreadcrumb={setBreadcrumb} />
      </div>

      <div className="main-content">
        
        <div className="header">
          
          <div className="searchbar">
          <SearchBar />
          </div>

          <div className="operatorProfile">
          <OperatorProfile
          src="/operator.jpeg" 
          altText=" "
          />
          </div>

          <div>
            <OwnerProfile
            src="/OwnerProfile.jpeg"
            altText=" "
            />
          </div>

        </div>
       
        <div className="content">
        <div className="menuSection">
          <div>
          {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Peternakan Widjaya', href: '/' },
              { label: breadcrumb, href: '/' }, // Gunakan state breadcrumb
            ]}
          />
          </div>
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
                href={category.href}
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
