"use client";

import React, { use, useState } from 'react';

import Sidebar from '@/components/ui/Sidebar/sidebar';
import { livestockData } from '@/data/livestockData';
import GenderIcon from '@/components/ui/genderIcon';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryTextField from '@/components/ui/PrimaryTextField/primaryTextField';
import { useRouter } from 'next/navigation'

interface LivestockMilkProductionPageProps {
    params: Promise<{
        id: string;
    }>;
}

const LivestockMilkProductionPage: React.FC<LivestockMilkProductionPageProps> = ({ params: paramsPromise }) => {
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

    const params = use(paramsPromise);
    const id = params.id.toLowerCase();

    const handleUpdateData = () => {
        console.log("Data hasil susu ternak berhasil diperbarui");
        alert("Data hasil susu ternak berhasil diperbarui");
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
                    <TopBar ></TopBar>

                    {livestockData.map((livestock) => (
                        livestock.name_id.toLowerCase() == id 
                        ?
                        <div className="content">
                            <div className="menuSection">
                                <div className="menuHeader">
                                    <h1 className="menuTittle">{livestock.name_id}</h1>
                                    <div className='genderIcon'>
                                        <GenderIcon gender={livestock.gender == "MALE" ? 'jantan' : 'betina'}></GenderIcon>
                                    </div>
                                    <div className="deleteIcon">
                                        <PrimaryButton 
                                        label='Perbarui' 
                                        width={130}
                                        onClick={() => {
                                            handleUpdateData(); // Memunculkan alert
                                            router.push(`/defaultView/${livestock.name_id.toLowerCase()}/`); // Melakukan navigasi
                                          }}
                                        />
                                        {/* <DeleteButton /> */}
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
                                    {/* <QRCodeSVG value={`${process.env.NEXT_PUBLIC_NEXT_HOST}/OwnerViewPage/livestockOwnerPage/${id}`} size={85} /> */}
                                    <div className='generalInformationLivestockBox'>
                                        <div className='generalInformationLivestockBoxTop'>
                                            <GeneralInfoBox title={'Tanggal Lahir'} value={livestock.dob} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Ras'} value={livestock.breed} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Grade'} value={livestock.grade || "Undefined"} ></GeneralInfoBox>
                                            <GeneralInfoBox title={'Berat'} value={livestock.weight || "Undefined"} ></GeneralInfoBox>
                                        </div>
                                        <div className='generalInformationLivestockBoxTop'>
                                        <GeneralInfoBox title={'ID Ayah'} value={livestock.dad_name_id || "N/A"} ras={'Purebred'}  isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Ibu'} value={livestock.mom_name_id || "N/A"} grade={'F1'} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Kakak'} value={livestock.grandpa_name_id || "N/A"} ras={'Purebred'} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Nenek'} value={livestock.grandma_name_id || "N/A"} grade={'F3'} isLink={true} linkHref='' ></GeneralInfoBox>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='livestockHistoryTitle'>
                                    Hasil Susu
                                </h1>
                                <div className='fieldFormVertical'>
                                    <PrimaryTextField width={350} placeholder='DD/MM/YYYY'label='Date *'/>
                                    <PrimaryTextField width={250} placeholder='liter'label='Liter *'/>
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

export default LivestockMilkProductionPage

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

interface DetailHistoryCardProps {
    historyItems: HistoryItem[];
}

const DetailHistoryCard: React.FC<DetailHistoryCardProps> = ({
    historyItems
}) => {
    return (
        <div>
            {historyItems.map((history) => (
            <div className='livestockHistoryData'>
                <div className='livestockHistoryItem'>
                    <h2>{history.title}</h2>
                    <p>{history.value}</p>
                </div>
            </div>
            ))}
        </div>
    );
};