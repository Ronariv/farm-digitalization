'use client'

import React, { useState } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TabNavigation from "@/components/ui/TabNavigation/TabNavigation";
import { Input } from "@/components/ui/input"
import DropdownFase from '@/components/ui/DropdownPhase/DropdownPhase';
import { useRouter } from 'next/navigation'
import { livestockData } from '@/data/livestockData';
import { farmListData } from '@/data/farmData';

const app: React.FC = () => {
    const router = useRouter()
     const [selectedFarm, setSelectedFarm] = useState(farmListData[0].name || '');
    

    const handleUpdateData = () => {
        console.log("Data ternak berhasil ditambahkan");
        alert("Data ternak berhasil ditambahkan");
      };

      const handleFaseSelect = (option: string) => {
        setSelectedFase(option);
      };
    
      const handleJenisKelaminSelect = (value: string) => {
        console.log('Selected Jenis Kelamin:', value);
      };

      const [selectedFase, setSelectedFase] = useState("");

    return (
      <div className="container-addTernak">
        <div className="sidebar-addTernak">
          <TabNavigation />
        </div>
        <div className="main-content-addTernak">
          <div className="content-wrapper-addTernak"> {/* Wrapper untuk align */}
            {/* <div className="section-addTernak">
              <h3 className="tittle-addTernak">Masukkan Gambar</h3>
              <img
                src="/SapiImage.jpeg"
                alt="ternak"
                className="image-addTernak"
              />
              <p className="image-description-addTernak">
                Lorem ipsum dolor sit amet <br />
                Lorem ipsum dolor sit amet
              </p>
            </div> */}
  
            <div className="sectionInput-addTernak">
              <Label title="Date of Birth *" />
              <Input disabled={false} type="text" placeholder="DD/MM/YYY" />

  
              <div className="grid-row-addTernak">
                <div>
                  <Label title="ID Ayah *" />
                  <Input disabled={false} type="text" placeholder="ID Ayah" />
                </div>
  
                <div>
                  <Label title="ID Ibu *" />
                  <div className="input-group-addTernak">
                    <Input disabled={false} type="number" placeholder="ID Ibu" />
                  </div>
                </div>

                <div>
                  <Label title="ID Kakek *" />
                  <Input disabled={false} type="text" placeholder="ID Kakek" />
                </div>
  
                <div>
                  <Label title="ID Nenek *" />
                  <div className="input-group-addTernak">
                    <Input disabled={false} type="number" placeholder="ID Nenek" />
                  </div>
                </div>
              </div>
  
              <div className="grid-row-addTernak">
                <div>
                  {/* <Label title="Fase (pilihan) *" /> */}
                  {/* <Input 
                  disabled={false} 
                  type="text" 
                  placeholder="Fase" 
                  isDropdownField
                  dropdownIcon={<DropdownIcon />}
                  dropupIcon={<DropupIcon />}
                  readOnly
                  /> */}
                                
                </div>
  
                <div>
                  {/* <Label title="Jenis Kelamin (pilihan) *" /> */}
                  {/* <Input
                    disabled={false}
                    type="text"
                    placeholder="Jenis Kelamin"
                    isDropdownField
                    dropdownIcon={<DropdownIcon />}
                    dropupIcon={<DropupIcon />}
                    readOnly
                  /> */}
                </div>

               
                
              </div>


              
            </div>
          </div>
          
          <div className="simpanButton-addDetailTernak">
            <PrimaryButton
            label="Simpan"
            width={221}
            onClick={() => {
              handleUpdateData(); // Memunculkan alert
              router.push("/OperatorViewPage"); // Melakukan navigasi
            }}
            />
            </div>

        </div>
      </div>
    );
  };
  
  const Label: React.FC<{ title: string }> = ({ title }) => (
    <label className="label-addTernak">{title}</label>
  );
  
  export default app;
  