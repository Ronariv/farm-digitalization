'use client'

import React, { useEffect, useState } from 'react';
import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
import Sidebar from '@/components/ui/Sidebar/sidebar';
import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '@/models/animalCategories';
import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import InviteFarmModal from '@/components/ui/InviteFarmModal/InviteFarmModal';
import { usersData } from '@/data/userData';
// // import { farmListData } from '@/data/farmData';
import useFetch from '@/hooks/useFetch';
import { FarmModel } from '@/models/FarmModel';
import { getCookie } from '@/lib/cookies';

interface OwnerViewPageProps {
  breadcrumb: string;
  setBreadcrumb: (value: string) => void;
}

const OwnerViewPage: React.FC<OwnerViewPageProps> = ({
  breadcrumb,
  setBreadcrumb,
}) => {
    const storedId = getCookie("id"); 
    const role = getCookie("role"); 

    const { data: farmData, loading: loadingFarms, error: errorFarms } = useFetch<FarmModel[]>(
        role == "owner" ? `${process.env.NEXT_PUBLIC_API_HOST}/farms?ownerId=${storedId}` : `${process.env.NEXT_PUBLIC_API_HOST}/farms/operator/${storedId}`,
    );
    const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
    useEffect(() => {
        if (farmData && farmData.length > 0) {
            setSelectedFarm(farmData[0].name);
        }
    }, [farmData]);

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
        console.log(farmName)
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const categories = animalCategories('owner');

    return (
    <div className="layout">
      <div className="sidebar">
      <Sidebar 
            setBreadcrumb={function (label: string): void {
                throw new Error('Function not implemented.');
            }} 
            farmList={farmData == null ? [] : farmData}
            setFarm={handleFarmChange}
            selectedFarm={selectedFarm}
        />
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
            {role == "owner" 
            ? 
            <PrimaryButton
            label="+ Tambah Peternakan"
            width= {210}
            onClick={() => setIsModalOpen(true)}
            />
            : <div></div>
            }
            
          {isModalOpen && (
            <InviteFarmModal
              users={usersData} // Gunakan data dari usersData
              onClose={() => setIsModalOpen(false)}
              farmList={farmData == null ? [] : farmData } setIsFarmInvited={function (value: boolean): void {
                throw new Error('Function not implemented.');
              } }                      
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

export default OwnerViewPage;