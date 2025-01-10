'use client'

import React, { useState } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TabNavigation from "@/components/ui/TabNavigation/TabNavigation";
import { Input } from "@/components/ui/input"
import DropdownFase from '@/components/ui/DropdownPhase/DropdownPhase';
import { useRouter } from 'next/navigation'

const app: React.FC = () => {
     const router = useRouter()

    const handleFieldClick = () => {
        console.log("Field clicked!");
        // Tampilkan dropdown di sini
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
            <div className="section-addTernak">
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
            </div>
  
            <div className="sectionInput-addTernak">
              <Label title="ID Ternak *" />
              <Input disabled={false} type="text" placeholder="ID Ternak" />
  
              <Label title="Ras Ternak *" />
              <Input disabled={false} type="text" placeholder="Ras Ternak" />
  
              <div className="grid-row-addTernak">
                <div>
                  <Label title="Grade" />
                  <Input disabled={false} type="text" placeholder="Grade" />
                </div>
  
                <div>
                  <Label title="Berat*" />
                  <div className="input-group-addTernak">
                    <Input disabled={false} type="number" placeholder="Berat" />
                  </div>
                </div>
              </div>
  
              <div className="grid-row-addTernak">
                <div>
                  <Label title="Fase (pilihan) *" />
                  {/* <Input 
                  disabled={false} 
                  type="text" 
                  placeholder="Fase" 
                  isDropdownField
                  dropdownIcon={<DropdownIcon />}
                  dropupIcon={<DropupIcon />}
                  readOnly
                  /> */}
                                  <DropdownFase
          
                  options={['Cempe', 'Dara', 'Hamil', 'Siap Kawin', 'Afkir']}
                  placeholder="Fase"
                  onSelect={handleFaseSelect}
                />
                </div>
  
                <div>
                  <Label title="Jenis Kelamin (pilihan) *" />
                  {/* <Input
                    disabled={false}
                    type="text"
                    placeholder="Jenis Kelamin"
                    isDropdownField
                    dropdownIcon={<DropdownIcon />}
                    dropupIcon={<DropupIcon />}
                    readOnly
                  /> */}
                                                    <DropdownFase
                  options={['Jantan', 'Betina']}
                  placeholder="Jenis Kelamin"
                  onSelect={handleJenisKelaminSelect}
                />
                </div>

                <div>
                {selectedFase === "Hamil" && (
                    <div className="extra-input-addTernak">
                        <Label title="ID Pasangan *" />
                        <Input
                        disabled={false}
                        type="text"
                        placeholder="ID Pasangan"
                        />
                    </div>
                    )}
                </div>
                
              </div>

              <div className="kondisiTernakSection">
                <Label title="Kondisi ternak *" />

              <div className="radio-group-addTernak">
                <div>
                  <input type="radio" id="sehat" name="kondisi" value="sehat" />
                  <label htmlFor="sehat">Sehat</label>
                </div>
                <div>
                  <input type="radio" id="sakit" name="kondisi" value="sakit" />
                  <label htmlFor="sakit">Sakit</label>
                </div>
              </div>
              </div>
              
  
  
              <Input
                disabled={false}
                type="text"
                placeholder="Masukkan tipe penyakit"
              />
            </div>
          </div>
          
          <div className="lanjutButton-addTernak">
            <PrimaryButton 
            label="Lanjut" 
            width={221}
            onClick={() => router.push(`/OwnerViewPage/addTernakPage/addDataDetailTernakPage`)}
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
  