"use client";

import React from 'react';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/navigation'
import { Livestock } from '@/models/LivestockModel';
import { useEffect } from "react";
import { QRCodeSVG } from 'qrcode.react';


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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M41.2573 32.4978C41.1017 32.3103 40.9488 32.1228 40.7989 31.9419C38.7364 29.4472 37.4885 27.9416 37.4885 20.8794C37.4885 17.2231 36.6138 14.2231 34.8898 11.9731C33.6185 10.3109 31.9001 9.05 29.6351 8.11812C29.606 8.10191 29.5799 8.08064 29.5582 8.05531C28.7435 5.32719 26.5142 3.5 23.9998 3.5C21.4854 3.5 19.257 5.32719 18.4423 8.0525C18.4206 8.07694 18.3949 8.09754 18.3664 8.11344C13.0807 10.2894 10.512 14.4641 10.512 20.8766C10.512 27.9416 9.26604 29.4472 7.20167 31.9391C7.05167 32.12 6.89885 32.3037 6.74323 32.495C6.34123 32.9798 6.08653 33.5696 6.00927 34.1947C5.93202 34.8197 6.03543 35.4538 6.30729 36.0219C6.88573 37.2406 8.11854 37.9972 9.52573 37.9972H38.4842C39.8848 37.9972 41.1092 37.2416 41.6895 36.0284C41.9625 35.4602 42.0669 34.8256 41.9903 34.1998C41.9137 33.5741 41.6593 32.9834 41.2573 32.4978ZM23.9998 45.5C25.3545 45.4989 26.6837 45.1312 27.8463 44.4358C29.009 43.7404 29.9617 42.7433 30.6035 41.5503C30.6338 41.4931 30.6487 41.4291 30.6469 41.3645C30.6451 41.2998 30.6266 41.2367 30.5932 41.1813C30.5598 41.126 30.5126 41.0802 30.4563 41.0484C30.3999 41.0166 30.3363 40.9999 30.2717 41H17.7298C17.665 40.9998 17.6013 41.0163 17.5449 41.048C17.4884 41.0797 17.4411 41.1255 17.4076 41.1809C17.3741 41.2364 17.3555 41.2995 17.3536 41.3642C17.3518 41.429 17.3667 41.4931 17.397 41.5503C18.0387 42.7432 18.9913 43.7402 20.1538 44.4356C21.3163 45.1309 22.6452 45.4987 23.9998 45.5Z" fill="#B3B3B3"/>
                    </svg>
                    </div>

                    <div className='profile'>
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
                                    <div className="deleteIcon">
                                        <PrimaryButton label='Ubah Data' width={130}/>
                                        <DeleteButton />
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
                                    <QRCodeSVG value={`${process.env.NEXT_PUBLIC_NEXT_HOST}/OwnerViewPage/livestockOwnerPage/${params.id}`} size={85} />
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