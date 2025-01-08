"use client";

import React from 'react';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation'
import { Livestock } from '@/models/LivestockModel';
import { useEffect } from "react";


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
import GenderIcon from '@/components/ui/genderIcon';
import StatisticsLactation from '@/components/ui/StatisticsLactation/statisticsLactation';
import StatisticMilk from '@/components/ui/StatisticsMilk/statisticsMilk';
import StatisticWeight from '@/components/ui/StatisticsWeight/statisticsWeight';
import DeleteButton from '@/components/ui/DeleteButtonIcon/deleteButton';
import EditButton from '@/components/ui/EditButton/editButton';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';

interface LivestockDetailPageProps {
    params: {
      id: string;
    };
  }

const LivestockCreatePage: React.FC<LivestockDetailPageProps> = ({ params }) => {
    // const { data, loading, error } = useFetch<Livestock[]>(
    //     `${process.env.NEXT_PUBLIC_API_HOST}/livestock/get-all-livestocks/`,
    //     undefined
    // );

    // if (loading) {
    //     return <Loading></Loading>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div>
            <div className="layout">
                <div className="sidebar">
                    <Sidebar setBreadcrumb={function (label: string): void {
                        throw new Error('Function not implemented.');
                    } } setFarm={function (farmName: string): void {
                        throw new Error('Function not implemented.');
                    } } />
                </div>

                <div className="main-content">
                    <div className="header">
                    
                    <div className="searchbar">
                    <SearchBar />
                    </div>

                    <div className="operatorProfile">
                    <OperatorProfile
                    src="/operator.jpeg" 
                    altText=" "
                    />
                    </div>

                    <div>
                        <OwnerProfile
                        src="/OwnerProfile.jpeg"
                        altText=" "
                        />
                    </div>

                    </div>

                    <div></div>

                </div>

            </div>
        </div>
    );
};

export default LivestockCreatePage