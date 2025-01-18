"use client";

import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { Livestock } from '@/models/LivestockModel';
import { useRouter } from 'next/navigation'

import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
import Sidebar from '@/components/ui/Sidebar/sidebar';
import SearchBar from '@/components/ui/SearchBar/searchBar';
import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '@/models/animalCategories';
import OperatorProfile from '@/components/ui/OperatorProfile/operatorProfile';
import Image from 'next/image';
import OwnerProfile from '@/components/ui/OwnerProfile/ownerProfile';
import AnimalCard from '@/components/ui/AnimalCard/animalCard';
import Loading from '@/components/ui/loading';
import SortByButton from '@/components/ui/SortBy/sortBy';
import FilterButton from '@/components/ui/Filter/filterButton';
import { livestockData } from '@/data/livestockData';
import { farmListData } from '@/data/farmData';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import PrimaryTextField from '@/components/ui/PrimaryTextField/primaryTextField';
import PrimaryRadioField from '@/components/ui/PrimaryRadioField/primaryRadioField';
import TopBar from '@/components/ui/TopBar/topBar';


const LivestockPage: React.FC = () => {
    const router = useRouter()
    
    const [selectedFarm, setSelectedFarm] = useState(farmListData[0].name || '');

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
    };

    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <div className="layout">
                <div className="sidebar">
                    <Sidebar 
                        setBreadcrumb={function (label: string): void {
                            throw new Error('Function not implemented.');
                        }} 
                        farmList={farmListData}
                        setFarm={handleFarmChange}
                    />
                </div>

                <div className="main-content">
                <TopBar ></TopBar>
                <div className='createLivestock'>
                    <div className='createLivestockForm'>
                        <div className='createLivestockFormImage'>
                            <h1>Masukkan Gambar</h1>
                            <img src="https://media.licdn.com/dms/image/v2/D5603AQG3XbeGSuDSUQ/profile-displayphoto-shrink_200_200/B56ZQvQS4UGQAY-/0/1735959589073?e=2147483647&v=beta&t=3xCF33te1yZCEaG-pxBxwL9fotWv1K8AG-hsQcSQEp8" alt="" />
                         
                        </div>
                        <div className='createLivestockFormInput'>
                            <PrimaryTextField label='ID Ternak *' placeholder='ID Ternak'/>
                            <PrimaryTextField label='Ras Ternak *' placeholder='Ras Ternak'/>
                            <div className='createLivestockFormInputHorizontal'>
                                <PrimaryTextField label='Grade *' placeholder='Grade' width={150}/>
                                <PrimaryTextField label='Berat *' placeholder='Berat' width={150}/>
                            </div>
                            <div className='createLivestockFormInputHorizontal'>
                                <PrimaryTextField label='Fase (pilihan) *' placeholder='Fase' width={150}/>
                                <PrimaryTextField label='Jenis Kelamin (pilihan) *' placeholder='Jenis Kelamin' width={150}/>
                            </div>
                            <div className='createLivestockFormInputRadio'>
                                <PrimaryRadioField label='Kondisi Ternak *' options={["Sehat", "Sakit"]} onChange={handleChange}/>
                                {selectedOption == "Sakit" 
                                ? <PrimaryTextField placeholder='Masukkan tipe penyakit' /> 
                                : <div></div>
                                }
                            </div>
                            <PrimaryTextField label='Date of Birth *' placeholder='DD/MM/YYYY'/>
                            <div className='createLivestockFormInputHorizontal'>
                                <PrimaryTextField label='ID Ayah*' placeholder='ID Ayah' width={150}/>
                                <PrimaryTextField label='ID Ibu*' placeholder='ID Ibu' width={150}/>
                            </div>
                            <div className='createLivestockFormInputHorizontal'>
                                <PrimaryTextField label='ID Kakek*' placeholder='ID Kakek' width={150}/>
                                <PrimaryTextField label='ID Nenek *' placeholder='ID Nenek' width={150}/>
                            </div>
                            <PrimaryButton label='Lanjut'/>
                        </div>
                    </div>
                    <div></div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default LivestockPage