import Image from "next/image";
'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google";
import Link from "next/link";
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';
import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
import ViewMore from "@/components/ui/ViewMore/ViewMore";
import DownloadQRButton from "@/components/ui/DownloadQRButton/DownloadQRButton";
import DetailLactationCard from "@/components/ui/DetailLactationCard/DetailLactationCard";
import AddButton from "@/components/ui/AddButton/addButton";
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TabNavigation from "@/components/ui/TabNavigation/TabNavigation";
import DropdownFase from "@/components/ui/DropdownPhase/DropdownPhase";
import SetUmurTernakForm from "@/components/ui/SetUmurTernakForm/SetUmurTernakForm";
import SetFasePerkembanganForm from "@/components/ui/SetFasePerkembanganForm/SetFasePerkembanganForm";
import CustomIDForm from "@/components/ui/CostumIDForm/CostumIDForm"
import Logo from "@/components/ui/Logo/Logo";
import MoreCard from "@/components/ui/MoreCard/MoreCard";
import DropdownInput from "@/components/ui/DropdownInput/DropdownInput";
import DropdownPhase from "@/components/ui/DropdownPhase/DropdownPhase";
import SidebarDisabled from "@/components/ui/SidebarDisabled/SidebarDisabled";
import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
import TopBar from "@/components/ui/TopBar/topBar";
import AcceptButton from "@/components/ui/AcceptButton/AcceptButton";
import RejectButton from "@/components/ui/RejectButton/RejectButton";
import AddGambarTernak from "@/components/ui/AddGambarTernak/AddGambarTernak";

export default function OnBoarding() {
 const [breadcrumb, setBreadcrumb] = useState('Statistik');
    const currentLactation = {
        title: 'Laktasi ke-4',
        description: '1 Jantan - Des 2024',
      };
      const history = [
        { title: 'Laktasi ke-3', description: '2 Betina - Okt 2024' },
        { title: 'Laktasi ke-2', description: '1 Jantan - Aug 2024' },
      ];

      const options = ['Cacingan', 'Diare', 'Demam', 'Flu'];

      const handleFaseSelect = (value: string) => {
        console.log('Selected value:', value);
      };
    
  return (
    <div>
        {/* <PerbaruiButton label={"Perbarui"}/>
        <PhaseLabelButton phases={[]}/>
        <ViewMore/>
        <DownloadQRButton/> */}
        {/* <DetailLactationCard currentLactation={currentLactation} history={history} />;
        <AddButton/>
        <PrimaryButton
        label="Lanjut" 
        width={221} 
       
        />

        <TabNavigation/>

        <DropdownFase
        options={['Cempe', 'Dara', 'Hamil', 'Siap Kawin', 'Afkir']}
        placeholder=""
        onSelect={handleFaseSelect}
      /> */}

      {/* <SetUmurTernakForm/>
      <SetFasePerkembanganForm/> */}
      {/* <CustomIDForm/> */}
      
      {/* <MoreCard/> */}
      {/* <DropdownPhase
        label="Pilih Kondisi"
        options={options}
        placeholder="Pilih atau tambahkan..."
        onSelect={handleFaseSelect}
      /> */}
{/* 
      <DropdownInput
              // label="Pilih Kondisi"
              options={options}
              placeholder="Riwayat Penyakit"
              onSelect={handleFaseSelect}
      /> */}

{/* <SidebarDisabled setBreadcrumb={setBreadcrumb} setFarm={function (farmName: string): void {
            throw new Error('Function not implemented.');
          } } /> */}


{/* <TopBar></TopBar>
<AcceptButton label={"Terima"}/>
<RejectButton label={"Tolak"}/> */}
{/* <DropdownPhase
                  options={['Tersedia', 'Hilang', 'Mati']}
                  placeholder="Status"
                  onSelect={handleFaseSelect}
                /> */}
    <AddGambarTernak/>

    </div>
  );
}

