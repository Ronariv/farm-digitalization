'use client'

import React, { useState } from 'react';
import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
import Sidebar from '@/components/ui/Sidebar/sidebar';
import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '@/models/animalCategories';
import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
import TopBarOpt from '@/components/ui/TopBarOpt/TopBarOpt';

interface OperatorViewPageProps {
  breadcrumb: string;
  setBreadcrumb: (value: string) => void;
}

const OperatorViewPage: React.FC<OperatorViewPageProps> = ({
  breadcrumb,
  setBreadcrumb,
}) => {
  const categories = animalCategories("operator");
  // const [breadcrumb, setBreadcrumb] = useState('Statistik');

  

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
        case '/OperatorViewPage':
          return 'Statistik';
        case '/livestockOperatorPage':
          return 'Ternak Anda';
        case '/activityOperatorPage':
          return 'Aktivitas';
        case '/settingsOperatorPage':
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
        
        <TopBarOpt/>
        {/* <div className="header">
          
          <div className="searchbar">
          <SearchBar />
          </div>

          <div className="operatorProfile">
          <OperatorProfile
          src="/operator.jpeg" 
          altText=" "
          />
          </div>


        </div> */}
       
        <div className="content">
        <div className="menuSection">
          <div>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Peternakan Widjaya', href: '/OperatorViewPage' },
              { label: 'Statistik', href: '' },
            ]}
          />
          </div>
          <div className="menuHeader">
            <h1 className="menuTittle">Pengaturan</h1>
            <div className="yearAndMonthPicker">
              <YearAndMonthPicker/>
            </div>
          </div>
          <div className="animalCategoriesCard">
            {categories.map((category) => (
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

export default OperatorViewPage;
