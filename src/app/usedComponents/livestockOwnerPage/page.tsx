"use client";

import React, { useEffect, useState } from 'react';
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
// import { livestockData } from '@/data/livestockData';
// import { farmListData } from '@/data/farmData';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TopBar from '@/components/ui/TopBar/topBar';
import { defaultFilterCategories } from '@/models/FilterCategory';
import InviteFarmModal from '@/components/ui/InviteFarmModal/InviteFarmModal';
import { getCookie } from '@/lib/cookies';
import { FarmModel } from '@/models/FarmModel';

const LivestockPage: React.FC = () => {
    const router = useRouter()

    const storedId = getCookie("id"); 

    const { data: farmData, loading: loadingFarms, error: errorFarms } = useFetch<FarmModel[]>(
        `${process.env.NEXT_PUBLIC_API_HOST}/farms?ownerId=${storedId}`,
    );
    const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
    const [selectedFarmId, setSelectedFarmId] = useState<number | null>(null);
    useEffect(() => {
        if (farmData && farmData.length > 0) {
            setSelectedFarm(farmData[0].name);
            setSelectedFarmId(farmData[0].id)
        }
    }, [farmData]);

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
        console.log(farmName)
    };

    const { data: livestockData, loading: loadingLivestock, error: errorLivestock } = useFetch<Livestock[]>(
        `${process.env.NEXT_PUBLIC_API_HOST}/animals`,
    );
    useEffect(() => {
        if (livestockData && livestockData.length > 0) {
            console.log(livestockData)
        }
    }, [livestockData]);

    return (
        <div>
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
                    <div className="menuHeader">
                        <h1 className="menuTittle">Peternakan Anda</h1>
                        <div className="sortByAndFilter">
                            <PrimaryButton label='+ Tambah Ternak' width={200} onClick={() => router.push(`/defaultView/addTernakPage?selectedFarm=${selectedFarm}&farmId=${selectedFarmId}`)}/>
                        </div>
                    </div>
                    <div className="menuHeader">
                        <div className="sortByAndFilter">
                            <SortByButton></SortByButton>

                            <FilterButton filters={defaultFilterCategories}></FilterButton>
                          
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                        livestockData != null 
                        ? 
                        livestockData
                            .filter((livestock) => livestock.farm_name === selectedFarm)
                            .map((livestock) => (
                                <div 
                                    key={livestock.id} 
                                    onClick={() => router.push(`defaultView/${livestock.id}/`)}
                                >
                                    <AnimalCard livestock={livestock} />
                                </div>
                            ))
                        : <div>Livestock is Empty</div>

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