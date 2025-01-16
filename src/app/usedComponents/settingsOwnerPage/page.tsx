'use client'

import React, { useEffect, useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
// import HealthStatus from "@/components/ui/healthStatus"; 
// import GenderIcon from '@/components/ui/genderIcon';
import EditButton from '@/components/ui/EditButton/editButton';
import AddButton from '@/components/ui/AddButton/addButton';
import InviteOperatorButton from '@/components/ui/InviteOperatorButton/inviteOperatorButton';
import UpdateButton from '@/components/ui/UpdateButton/updateButton';
import PrintButton from '@/components/ui/DownloadQRButton/DownloadQRButton';
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
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import SetUmurTernakForm from '@/components/ui/SetUmurTernakForm/SetUmurTernakForm';
import SetFasePerkembanganForm from '@/components/ui/SetFasePerkembanganForm/SetFasePerkembanganForm';
import CustomIDForm from "@/components/ui/CostumIDForm/CostumIDForm"
import { useRouter } from 'next/navigation'
import { getCookie } from '@/lib/cookies';
import useFetch from '@/hooks/useFetch';
import { FarmModel } from '@/models/FarmModel';

const App: React.FC = () => {

  const [breadcrumb, setBreadcrumb] = useState('Statistik');
  const router = useRouter()
  const categories = animalCategories('owner');

  const storedId = getCookie("id"); 

  const { data: farmData, loading: loadingFarms, error: errorFarms } = useFetch<FarmModel[]>(
      `${process.env.NEXT_PUBLIC_API_HOST}/farms?ownerId=${storedId}`,
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
          <div>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Peternakan Widjaya', href: '/OwnerViewPage' },
              { label: 'Settings', href: '' },
            ]}
          />
          </div>
          
          <div className="menuHeader">
            <h1 className="menuTittle">Pengaturan</h1>
            <div className="yearAndMonthPicker">
              <PrimaryButton
              label="Simpan Perubahan" 
              width={190}
              onClick={() => router.push(`/defaultView`)}
              />
            </div>
          </div>

          <div className="rowContainerSettingsForm">
            <div className="umurTernakForm">
              <SetUmurTernakForm/>
            </div>
            <div className="fasePerkembanganForm">
              <SetFasePerkembanganForm/>
            </div>
          </div>

          <div className="costumIDForm">
          <CustomIDForm/>
          </div>
        </div>
      </div>

      </div>
    </div>
    );
};

export default App;
