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
import TopBar from '@/components/ui/TopBar/topBar';


const LivestockPage: React.FC = () => {
    const router = useRouter()
    
    const [selectedFarm, setSelectedFarm] = useState(farmListData[0].name || '');

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
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
                
                    <div className="content">
                    <div className="menuSection">
                    <div className="menuHeader">
                        <h1 className="menuTittle">Peternakan Anda</h1>
                        <div className="sortByAndFilter">
                            <PrimaryButton label='+ Tambah Ternak' width={200} onClick={() => router.push(`livestockOwnerPage/create/`)}/>
                        </div>
                    </div>
                    <div className="menuHeader">
                        <div className="sortByAndFilter">
                            <SortByButton></SortByButton>
                            <FilterButton></FilterButton>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                        // data != null 
                        // ? 
                        livestockData.filter(
                            (livestock) => livestock.farm_name === selectedFarm 
                        ).map((livestock) => (
                            <div key={livestock.id} onClick={() => router.push(`livestockOwnerPage/${livestock.name_id.toLowerCase()}/`)}>
                                <AnimalCard livestock={livestock} />
                            </div>
                        ))
                        // :
                        // <div></div>
                        }
                    </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default LivestockPage