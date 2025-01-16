"use client";

import React, { use } from 'react';
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
import TopBar from '@/components/ui/TopBar/topBar';
import DownloadQRButton from '@/components/ui/DownloadQRButton/DownloadQRButton';
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';
import PhaseLabelTag from '@/components/ui/PhaseLabel/PhaseLabelTag';
import { phaseLabels } from '@/data/phaseLabels';
import DetailLactationCard from '@/components/ui/DetailLactationCard/DetailLactationCard';
import StatisticsMilkUpdate from '@/components/ui/StatisticsMilkUpdate/StatisticsMilkUpdate';
import StatisticsWeightUpdate from '@/components/ui/StatisticsWeightUpdate/StatisticsWeightUpdate';
import TopBarOpt from '@/components/ui/TopBarOpt/TopBarOpt';

interface LivestockDetailPageProps {
    params: Promise<{
        id: string;
    }>;
  }

const LivestockDetailPage: React.FC<LivestockDetailPageProps> = ({ params: paramsPromise }) => {
    const { data, loading, error } = useFetch<Livestock[]>(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/animals`,
        undefined
    );

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const params = use(paramsPromise);
    const id = params.id.toLowerCase();

    const livestock = livestockData[0];

    const currentLactation = {
        title: 'Laktasi ke-4',
        description: '1 Jantan - Des 2024',
        livestock: livestock,
      };
      const history = [
        { title: 'Laktasi ke-3', description: '2 Betina - Okt 2024', livestock: livestock },
        { title: 'Laktasi ke-2', description: '1 Jantan - Aug 2024', livestock: livestock },
      ];

      const handleDeleteData = () => {
        const isConfirmed = window.confirm(
          `Apakah Anda yakin untuk menghapus ternak ID ${livestock.name_id}?`
        );
      
        if (isConfirmed) {
          router.push(`/OwnerViewPage/livestockOwnerPage`);
        } else {
          router.push(`/OwnerViewPage/livestockOwnerPage/${livestock.name_id.toLowerCase()}/`);
        }
      };
      
   const router = useRouter()
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
                    <TopBarOpt/>

                    {livestockData.map((livestock) => (
                        livestock.name_id.toLowerCase() == id 
                        ?
                        <div className="content">
                            <div className="menuSection">
                                <div className="menuHeader">
                                    <h1 className="menuTittle">{livestock.name_id}</h1>
                                    <div className='genderIcon'>
                                        <GenderIcon gender={livestock.gender == "MALE" ? 'jantan' : 'betina'}></GenderIcon>
                                        {/* <PhaseLabelTag phases={phaseLabels} CEMPE={livestock.phase}></PhaseLabelTag> */}
                                       

                                    </div>
                                    <div className="phaseLabelTag-livestockOwnerPage">
                                        <PhaseLabelTag 
                                        phases={phaseLabels} 
                                        filterId={livestock.phase}
                                        width={60}
                                        textSize={10}
                                        >
                                        </PhaseLabelTag>
                                       </div>
                                    <div className="deleteIcon">
                                        <DownloadQRButton/>
                                        <PrimaryButton 
                                        label='Ubah Data' 
                                        width={130}
                                        onClick={() => router.push(`/OperatorViewPage/addTernakPage`)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='livestock'>
                                <div className='generalInformationLivestock'>
                                    <img
                                    src={livestock == null ? "" : livestock.photo_url}
                                    alt={livestock == null ? "" : livestock.name_id}
                                    style={{
                                        width: '232px',
                                        height: '214px',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                    }}
                                    />
                                    {/* <QRCodeSVG value={`${process.env.NEXT_PUBLIC_NEXT_HOST}/OwnerViewPage/livestockOwnerPage/${params.id}`} size={85} /> */}
                                    <div className='generalInformationLivestockBox'>
                                        <div className='generalInformationLivestockBoxTop'>
                                            <GeneralInfoBox title={'Tanggal Lahir'} value={livestock == null ? "" : new Date(livestock.dob).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Ras'} value={livestock == null ? "" : livestock.breed} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Grade'} value={livestock == null ? "" : livestock.grade || "Undefined"} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Berat'} value={livestock == null ? "" : livestock.weight || "Undefined"} ></GeneralInfoBox>
                                        </div>
                                        <div className='generalInformationLivestockBoxTop'>
                                            <GeneralInfoBox title={'ID Ayah'} value={livestock == null ? "" : livestock.dad_name_id || "N/A"} ras={'Purebred'}  isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Ibu'} value={livestock == null ? "" : livestock.mom_name_id || "N/A"} grade={'F1'} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Kakek'} value={livestock == null ? "" : livestock.grandpa_name_id || "N/A"} ras={'Purebred'} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Nenek'} value={livestock == null ? "" : livestock.grandma_name_id || "N/A"} grade={'F3'} isLink={true} linkHref='' ></GeneralInfoBox>
                                        </div>
                                    </div>
                                </div>
                                <div className='detailInformationLivestock'>
                                    <DetailInformationCard
                                        // conditionTitle="Kondisi"
                                        // conditionValue={livestock.health.current_condition}
                                        historyTitle="Riwayat Sakit"
                                        historyItems={livestock.health.history_items.length > 2 ? livestock.health.history_items.slice(0, 2) : livestock.health.history_items}
                                        livestock={livestock}
                                    />
                                    <DetailInformationCard
                                        // conditionTitle="Obat"
                                        // conditionValue={livestock.medication.current_condition}
                                        historyTitle="Riwayat Obat"
                                        historyItems={livestock.medication.history_items.length > 2 ? livestock.medication.history_items.slice(0, 2) : livestock.medication.history_items}
                                        livestock={livestock}
                                    />
                                    <DetailInformationCard
                                        // conditionTitle="Vitamin"
                                        // conditionValue={livestock.vitamin.current_condition}
                                        historyTitle="Riwayat Vitamin"
                                        historyItems={livestock.vitamin.history_items.length > 2 ? livestock.vitamin.history_items.slice(0, 2) : livestock.vitamin.history_items}
                                        livestock={livestock}
                                    />
                                    <DetailInformationCard
                                        // conditionTitle="Vaksin"
                                        // conditionValue={livestock.vaccine.current_condition}
                                        historyTitle="Riwayat Vaksin"
                                        historyItems={livestock.vaccine.history_items.length > 2 ? livestock.vaccine.history_items.slice(0, 2) : livestock.vaccine.history_items}
                                        livestock={livestock}
                                    />
                                </div>
                                <div className='statisticsInformationLivestock'>
                                    {/* <StatisticMilk filterBy="year" filterValue={2019} milkData={livestock.milkData}/> */}
                                    <StatisticsMilkUpdate filterBy="year" filterValue={2019} milkData={livestock.milkData} livestock={livestock} />
                                    <div className="lactationSection">
                                        <StatisticsLactation filterBy="year" filterValue={2019} lactationData={livestock.lactationData}/>
                                        <DetailLactationCard currentLactation={currentLactation} history={history} livestock={livestock} />;
                                    </div>
                                    
                                    {/* <StatisticWeight filterBy="year" filterValue={2019} weightData={livestock.weightData}/> */}
                                    <StatisticsWeightUpdate filterBy="year" filterValue={2019} weightData={livestock.weightData} livestock={livestock}/>
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
    ras?: string;
    grade?: string;
}

const GeneralInfoBox: React.FC<GeneralInfoBoxProps> = ({ title, value, isLink = false, linkHref = "#", ras, grade }) => {
    return (
        <div className="generalInformationLivestockBoxTopData">
            <h1 className="generalInformationLivestockBoxTopDataTitle">{title}</h1>
            {isLink ? (
                <div>
                    <a
                    href={linkHref}
                    className="generalInformationLivestockBoxTopDataValue hyperlinkStyle"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >
              
  
                    {value ?? "N/A"}
                </a>

               <p>{ras}</p>
               <p>{grade}</p>
                
             </div>
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
    // conditionTitle: string;
    // conditionValue: string;
    historyTitle: string;
    historyItems: HistoryItem[];
    livestock: Livestock;
}

const DetailInformationCard: React.FC<DetailInformationCardProps> = ({
    // conditionTitle,
    // conditionValue,
    historyTitle,
    historyItems,
    livestock,
    
}) => {
    const router = useRouter(); // Gunakan useRouter dari Next.js

    const getPageUrl = (title: string) => {
        switch (title) {
            case "Riwayat Sakit":
                return "/OperatorViewPage/livestockOperatorPage/[id]/sickness";
            case "Riwayat Obat":
                return "/OperatorViewPage/livestockOperatorPage/[id]/medication";
            case "Riwayat Vitamin":
                return "/OperatorViewPage/livestockOperatorPage/[id]/vitamin";
            case "Riwayat Vaksin":
                return "/OperatorViewPage/livestockOperatorPage/[id]/vaccine";
            default:
                return "/OperatorViewPage/livestockOperatorPage/[id]";
        }
    };

    const handleNavigate = () => {
        // const pageUrl = getPageUrl(historyTitle);
        // router.push(pageUrl); 
        const pageUrl = getPageUrl(historyTitle);
        const dynamicUrl = pageUrl.replace("[id]", livestock.name_id.toLowerCase());
        router.push(dynamicUrl);
    };

    return (
        <div className="detailInformationLivestockCard">
            <div className="detailInformationLivestockCardData">
                {/* Condition Section */}

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
                    <div className="perbaruiButtonOwnerPage">
                          <PerbaruiButton 
                          label={'Perbarui'}
                          onClick={handleNavigate}
                          />
                    </div>
                  
                </div>
            </div>
        </div>
    );
};