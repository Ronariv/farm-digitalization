"use client";

import React, { use, useEffect, useState } from 'react';

import Sidebar from '@/components/ui/Sidebar/sidebar';
import GenderIcon from '@/components/ui/genderIcon';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryTextField from '@/components/ui/PrimaryTextField/primaryTextField';
import { useRouter } from 'next/navigation'
import DropdownInput from "@/components/ui/DropdownInput/DropdownInput";
import { getCookie } from '@/lib/cookies';
import useFetch from '@/hooks/useFetch';
import { FarmModel } from '@/models/FarmModel';
import { Livestock } from '@/models/LivestockModel';

interface LivestockVaccinePageProps {
    params: Promise<{
        id: string;
    }>;
}

const LivestockVaccinePage: React.FC<LivestockVaccinePageProps> = ({ params: paramsPromise }) => {
    const params = use(paramsPromise);
    const id = params.id;
    
    const storedId = getCookie("id"); 

    const { data: farmData, loading: loadingFarms, error: errorFarms } = useFetch<FarmModel[]>(
        `${process.env.NEXT_PUBLIC_API_HOST}/farms?ownerId=${storedId}`,
    );
    const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
    const [selectedFarmId, setSelectedFarmId] = useState<number | null>(null);
    useEffect(() => {
        if (farmData && farmData.length > 0) {
            setSelectedFarm(farmData[0].name);
            setSelectedFarmId(farmData[0].id);
        }
    }, [farmData]);

    const handleFarmChange = (farmName: string, farmId: number) => {
        setSelectedFarm(farmName);
        setSelectedFarmId(farmId);
        console.log(farmName)
    };

    const [textFields, setTextFields] = useState<React.ReactNode[]>([]);

    const options = ['Parvovirus', 'Hepatitis', 'Distemper', 'Parainfluenza'];

    const { data: livestock, loading: loadingLivestock, error: errorLivestock } = useFetch<Livestock>(
        `${process.env.NEXT_PUBLIC_API_HOST}/animals/${id}`,
    );
    useEffect(() => {
        if (livestock) {
            console.log(livestock)
        }
    }, [livestock]);

    const router = useRouter()

    const [apiError, setApiError] = useState(null);
    const [apiData, setApiData] = useState(null);

    const [dropdownData, setDropdownData] = useState<
        { id: number; value: string | null }[]
    >([]);

    const handleDropdownSelect = (value: string, dropdownId: number) => {
        setDropdownData((prev) => {
            const existingDropdown = prev.find((d) => d.id === dropdownId);
    
            if (existingDropdown) {
            return prev.map((d) =>
                d.id === dropdownId ? { ...d, value } : d
            );
            } else {
            return [...prev, { id: dropdownId, value }];
            }
        });
    };

    const handleSubmit = async () => {
        try {
            if (livestock?.vaccine == null) {
                const payload = {
                    current_condition: dropdownData[0].value, 
                    animalId: id,
                    history_items: dropdownData.map((dropdownData) => ({
                        title: dropdownData.value,
                        value: new Date().toLocaleString("en-US", { year: "numeric", month: "short" }) // Format like "May 2019"
                    }))
                };
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/animals/${id}/vaccine`, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                    "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    router.replace(`/defaultView/${id}`);
                } else {
                    setApiError(data.error || "Something went wrong");
                }
            } else {
                const payload = {
                    current_condition: dropdownData[0].value, 
                    animalId: id,
                    history_items: [
                        ...livestock.vaccine.historyItems.map((item) => ({
                            title: item.title,
                            value: item.value,
                        })),
                        ...dropdownData.map((dropdownData) => ({
                            title: dropdownData.value,
                            value: new Date().toLocaleString("en-US", { year: "numeric", month: "short" }) // Format like "May 2019"
                        })),
                    ],
                };
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/vaccine/${livestock?.vaccine.id}`, {
                    method: "PUT",
                    body: JSON.stringify(payload),
                    headers: {
                    "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    router.replace(`/defaultView/${id}`);
                } else {
                    setApiError(data.error || "Something went wrong");
                }
            }
        } catch (error) {
        } finally {
            // setLoading(false);
        }
    };

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
                                    <h1 className="menuTittle">{livestock == null ? "" : livestock.name_id}</h1>
                                    <div className='genderIcon'>
                                        <GenderIcon gender={livestock == null ? "jantan" : livestock.gender == "MALE" ? 'jantan' : 'betina'}></GenderIcon>
                                    </div>
                                    <div className="deleteIcon">
                                        <PrimaryButton 
                                        label='Perbarui' 
                                        width={130}
                                         onClick={() => {
                                            handleSubmit();
                                          }}
                                        />
                                        {/* <DeleteButton /> */}
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
                                    {/* <QRCodeSVG value={`${process.env.NEXT_PUBLIC_NEXT_HOST}/OwnerViewPage/livestockOwnerPage/${id}`} size={85} /> */}
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
                                            <GeneralInfoBox title={'ID Kakak'} value={livestock == null ? "" : livestock.grandpa_name_id || "N/A"} ras={'Purebred'} isLink={true} linkHref='' ></GeneralInfoBox>
                                            <GeneralInfoBox title={'ID Nenek'} value={livestock == null ? "" : livestock.grandma_name_id || "N/A"} grade={'F3'} isLink={true} linkHref='' ></GeneralInfoBox>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='livestockHistoryTitle'>
                                    Riwayat Vaksin
                                </h1>
                                {
                                    textFields.map((field) => (
                                        field
                                    ))
                                }
                                <div className='addLivestockHistory'>
                                <DropdownInput
                                    // label="Pilih Kondisi"
                                    options={options}
                                    placeholder="Riwayat Vaksin"
                                    onSelect={handleDropdownSelect}
                                />
                                </div>
                                <DetailHistoryCard historyItems={livestock == null ? [] : livestock.vaccine == null ? [] : livestock.vaccine.historyItems} />
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default LivestockVaccinePage

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