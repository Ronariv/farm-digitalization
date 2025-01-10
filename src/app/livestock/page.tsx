import Image from "next/image";
'use client';

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

export default function OnBoarding() {

    const currentLactation = {
        title: 'Laktasi ke-4',
        description: '1 Jantan - Des 2024',
      };
      const history = [
        { title: 'Laktasi ke-3', description: '2 Betina - Okt 2024' },
        { title: 'Laktasi ke-2', description: '1 Jantan - Aug 2024' },
      ];

      const handleFaseSelect = (value: string) => {
        console.log('Selected Fase:', value);
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
      <CustomIDForm/>
      

    </div>
  );
}

