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
        case '/OwnerViewPage':
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
      <Sidebar setBreadcrumb={setBreadcrumb} setFarm={function (farmName: string): void {
            throw new Error('Function not implemented.');
          } } />
      </div>

      <div className="main-content">
        
        <div className="header">
          
          <div className="searchbar">
          <SearchBar />
          </div>

          <div className="operatorProfile">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M41.2573 32.4978C41.1017 32.3103 40.9488 32.1228 40.7989 31.9419C38.7364 29.4472 37.4885 27.9416 37.4885 20.8794C37.4885 17.2231 36.6138 14.2231 34.8898 11.9731C33.6185 10.3109 31.9001 9.05 29.6351 8.11812C29.606 8.10191 29.5799 8.08064 29.5582 8.05531C28.7435 5.32719 26.5142 3.5 23.9998 3.5C21.4854 3.5 19.257 5.32719 18.4423 8.0525C18.4206 8.07694 18.3949 8.09754 18.3664 8.11344C13.0807 10.2894 10.512 14.4641 10.512 20.8766C10.512 27.9416 9.26604 29.4472 7.20167 31.9391C7.05167 32.12 6.89885 32.3037 6.74323 32.495C6.34123 32.9798 6.08653 33.5696 6.00927 34.1947C5.93202 34.8197 6.03543 35.4538 6.30729 36.0219C6.88573 37.2406 8.11854 37.9972 9.52573 37.9972H38.4842C39.8848 37.9972 41.1092 37.2416 41.6895 36.0284C41.9625 35.4602 42.0669 34.8256 41.9903 34.1998C41.9137 33.5741 41.6593 32.9834 41.2573 32.4978ZM23.9998 45.5C25.3545 45.4989 26.6837 45.1312 27.8463 44.4358C29.009 43.7404 29.9617 42.7433 30.6035 41.5503C30.6338 41.4931 30.6487 41.4291 30.6469 41.3645C30.6451 41.2998 30.6266 41.2367 30.5932 41.1813C30.5598 41.126 30.5126 41.0802 30.4563 41.0484C30.3999 41.0166 30.3363 40.9999 30.2717 41H17.7298C17.665 40.9998 17.6013 41.0163 17.5449 41.048C17.4884 41.0797 17.4411 41.1255 17.4076 41.1809C17.3741 41.2364 17.3555 41.2995 17.3536 41.3642C17.3518 41.429 17.3667 41.4931 17.397 41.5503C18.0387 42.7432 18.9913 43.7402 20.1538 44.4356C21.3163 45.1309 22.6452 45.4987 23.9998 45.5Z" fill="#B3B3B3"/>
                    </svg>
          </div>

          <div className='profile'>
            <OwnerProfile
            src="/OwnerProfile.jpeg"
            altText=" "
            />
          </div>

        </div>
       
        <div className="content">
        <div className="menuSection">
          <div>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Peternakan Widjaya', href: '/OwnerViewPage' },
              { label: 'Statistik', href: '' },
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
