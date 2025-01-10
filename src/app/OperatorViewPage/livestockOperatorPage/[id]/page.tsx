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

interface LivestockDetailPageProps {
    params: {
      id: string;
    };
  }

const LivestockDetailPage: React.FC<LivestockDetailPageProps> = ({ params }) => {
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

                    {livestockData.map((livestock) => (
                        livestock.name_id.toLowerCase() == params.id 
                        ?
                        <div className="content">
                            <div className="menuSection">
                                <div className="menuHeader">
                                    <h1 className="menuTittle">{livestock.name_id}</h1>
                                    <div className='genderIcon'>
                                        <GenderIcon gender={livestock.gender == "MALE" ? 'jantan' : 'betina'}></GenderIcon>
                                    </div>
                                    <div className="sortByAndFilter">
                                        <h1 className="showQR">Show QR</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='livestock'>
                                <div className='generalInformationLivestock'>
                                    <img
                                    src={livestock.photo_url}
                                    alt={livestock.name_id}
                                    style={{
                                        width: '232px',
                                        height: '214px',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                    }}
                                    />
                                    <div className='generalInformationLivestockBox'>
                                        <div className='generalInformationLivestockBoxTop'>
                                            <GeneralInfoBox title={'Tanggal Lahir'} value={livestock.dob} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Ras'} value={livestock.breed} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Grade'} value={livestock.grade || "Undefined"} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Berat'} value={livestock.weight || "Undefined"} ></GeneralInfoBox>
                                        </div>
                                        <div className='generalInformationLivestockBoxTop'>
                                            <GeneralInfoBox title={'ID Ayah'} value={livestock.dad_name_id || "N/A"} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Ibu'} value={livestock.mom_name_id || "N/A"} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Kakak'} value={livestock.grandpa_name_id || "N/A"} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Nenek'} value={livestock.grandma_name_id || "N/A"} isLink={true} linkHref='' ></GeneralInfoBox>
                                        </div>
                                    </div>
                                </div>
                                <div className='detailInformationLivestock'>
                                    <DetailInformationCard
                                        conditionTitle="Kondisi"
                                        conditionValue={livestock.health.current_condition}
                                        historyTitle="Riwayat Sakit"
                                        historyItems={livestock.health.history_items.length > 2 ? livestock.health.history_items.slice(0, 2) : livestock.health.history_items}
                                    />
                                    <DetailInformationCard
                                        conditionTitle="Obat"
                                        conditionValue={livestock.medication.current_condition}
                                        historyTitle="Riwayat Obat"
                                        historyItems={livestock.medication.history_items.length > 2 ? livestock.medication.history_items.slice(0, 2) : livestock.medication.history_items}
                                    />
                                    <DetailInformationCard
                                        conditionTitle="Vitamin"
                                        conditionValue={livestock.vitamin.current_condition}
                                        historyTitle="Riwayat Vitamin"
                                        historyItems={livestock.vitamin.history_items.length > 2 ? livestock.vitamin.history_items.slice(0, 2) : livestock.vitamin.history_items}
                                    />
                                    <DetailInformationCard
                                        conditionTitle="Vaksin"
                                        conditionValue={livestock.vaccine.current_condition}
                                        historyTitle="Riwayat Vaksin"
                                        historyItems={livestock.vaccine.history_items.length > 2 ? livestock.vaccine.history_items.slice(0, 2) : livestock.vaccine.history_items}
                                    />
                                </div>
                                <div className='statisticsInformationLivestock'>
                                    <StatisticMilk filterBy="year" filterValue={2019} milkData={livestock.milkData}/>
                                    <StatisticsLactation filterBy="year" filterValue={2019} lactationData={livestock.lactationData}/>
                                    <StatisticWeight filterBy="year" filterValue={2019} weightData={livestock.weightData}/>
                                </div>
                            </div>
                        </div>
                        :
                        <div></div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default LivestockDetailPage

interface GeneralInfoBoxProps {
    title: string;
    value: string | number | null;
    isLink?: boolean; // Optional parameter to determine if the value is a hyperlink
    linkHref?: string; // URL for the hyperlink
}

const GeneralInfoBox: React.FC<GeneralInfoBoxProps> = ({ title, value, isLink = false, linkHref = "#" }) => {
    return (
        <div className="generalInformationLivestockBoxTopData">
            <h1 className="generalInformationLivestockBoxTopDataTitle">{title}</h1>
            {isLink ? (
                <a
                    href={linkHref}
                    className="generalInformationLivestockBoxTopDataValue hyperlinkStyle"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {value ?? "N/A"}
                </a>
            ) : (
                <h1 className="generalInformationLivestockBoxTopDataValue">{value ?? "N/A"}</h1>
            )}
        </div>
    );
};

interface HistoryItem {
    title: string;
    value: string | number;
}

interface DetailInformationCardProps {
    conditionTitle: string;
    conditionValue: string;
    historyTitle: string;
    historyItems: HistoryItem[];
}

const DetailInformationCard: React.FC<DetailInformationCardProps> = ({
    conditionTitle,
    conditionValue,
    historyTitle,
    historyItems,
}) => {
    return (
        <div className="detailInformationLivestockCard">
            <div className="detailInformationLivestockCardData">
                {/* Condition Section */}
                <div className="detailInformationLivestockCardDataCategory">
                    <h1 className="detailInformationLivestockCardDataCategoryTitle">{conditionTitle}</h1>
                    <h1 className="detailInformationLivestockCardDataCategoryValue">{conditionValue}</h1>
                </div>

                {/* History Section */}
                <div className="detailInformationLivestockCardDataHistory">
                    <h1 className="detailInformationLivestockCardDataCategoryTitle">{historyTitle}</h1>
                    <div className="detailInformationLivestockCardDataHistoryData">
                        {historyItems.map((item, index) => (
                            <div
                                key={index}
                                className="detailInformationLivestockCardDataHistoryDataDetail"
                            >
                                <h1 className="detailInformationLivestockCardDataHistoryDataTitle">
                                    {item.title}
                                </h1>
                                <h1 className="detailInformationLivestockCardDataHistoryDataValue">
                                    {item.value}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};