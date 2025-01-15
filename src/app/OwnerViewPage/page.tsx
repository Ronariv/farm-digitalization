'use client'

import React, { useState } from 'react';
import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
import Sidebar from '@/components/ui/Sidebar/sidebar';
import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '@/models/animalCategories';
import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import InviteFarmModal from '@/components/ui/InviteFarmModal/InviteFarmModal';
import { usersData } from '@/data/userData';
import { farmListData } from '@/data/farmData';

export default function OwnerViewPage() {

    const [breadcrumb, setBreadcrumb] = useState('Statistik');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const categories = animalCategories('owner');

    return (
    <div className="layout">
      <div className="sidebar">
      <Sidebar setBreadcrumb={setBreadcrumb} setFarm={function (farmName: string): void {
            throw new Error('Function not implemented.');
          } } />
      </div>

      <div className="main-content">
        <TopBar ></TopBar>
       
        <div className="content">
        <div className="menuSection">

          <div className="menuHeader1">
          <div>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Peternakan Widjaya', href: '/OwnerViewPage' },
              { label: 'Statistik', href: '' },
            ]}
          />
          </div>
          <div>
            <PrimaryButton
          label="+ Tambah Peternakan"
          width= {210}
          onClick={() => setIsModalOpen(true)}
          />
          {isModalOpen && (
        <InviteFarmModal
                      users={usersData} // Gunakan data dari usersData
                      onClose={() => setIsModalOpen(false)} 
                      farmList={farmListData}        
                      />
      )}
          </div>
          </div>


          <div className="menuHeader">
            <h1 className="menuTittle">Statistik</h1>
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
