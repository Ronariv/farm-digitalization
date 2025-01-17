"use client";

import React, { use, useEffect, useState } from 'react';

import Sidebar from '@/components/ui/Sidebar/sidebar';
import GenderIcon from '@/components/ui/genderIcon';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryTextField from '@/components/ui/PrimaryTextField/primaryTextField';
import { Input } from "@/components/ui/input"
import DropdownFase from '@/components/ui/DropdownPhase/DropdownPhase';
import { useRouter } from 'next/navigation'
import { getCookie } from '@/lib/cookies';
import useFetch from '@/hooks/useFetch';
import { FarmModel } from '@/models/FarmModel';
import { Livestock, MonthlyData, YearlyData } from '@/models/LivestockModel';

interface LivestockLactationPageProps {
    params: Promise<{
        id: string;
    }>;
}

interface LactationDataPayload {
    animalId: string;
    yearlyData: YearlyDataPayload[];
}

interface YearlyDataPayload {
    year: number;
    data: MonthlyDataPayload[];
}

interface MonthlyDataPayload {
    month: string;
    value: number;
}

const LivestockLactationPage: React.FC<LivestockLactationPageProps> = ({ params: paramsPromise }) => {
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

    const Label: React.FC<{ title: string }> = ({ title }) => (
        <label className="label-addTernak">{title}</label>
    );

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

    const [dropdownData, setDropdownData] = useState<string[]>([]);

    const [date, setDate] = useState("2025-01-16");
    const [value, setValue] = useState(0);

    const handleDropdownSelect = (value: string) => {
        setDropdownData((prev) => {
            return [...prev, value ];
        });
    };

    const handleSubmit = async () => {
        const year = new Date(date).getFullYear();
        const month = new Date(date).toLocaleString('default', { month: 'short' });

        try {
            if (livestock?.lactationData == null) {
                const payload = {
                    animalId: id,
                    yearlyData: [
                        {
                            year:  year,
                            data: [
                                {
                                    month: month,
                                    value: value
                                }
                            ]
                        }
                    ]
                };

                const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lactationData`, {
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
                let payload: LactationDataPayload = {
                    animalId: id,
                    yearlyData: []
                };

                livestock.lactationData.yearlyDatas.forEach((lactationEntry: YearlyData) => {
                    let yearData = payload.yearlyData.find((item) => item.year === lactationEntry.year);
              
                    if (!yearData) {
                      // If the year doesn't exist, create new yearly data
                      yearData = { year: lactationEntry.year, data: [] };
                      payload.yearlyData.push(yearData);
                    }
              
                    // Now populate month data
                    lactationEntry.monthlyDatas.forEach((lactationMonthData: MonthlyData) => {
                      let monthData = yearData.data.find((item) => item.month === lactationMonthData.month);
                      if (monthData) {
                        monthData.value += lactationMonthData.value;
                      } else {
                        yearData.data.push({ month: lactationMonthData.month, value: lactationMonthData.value });
                      }
                    });
                });

                let yearData = payload.yearlyData.find((item) => item.year === year);
                if (!yearData) {
                    yearData = { year, data: [] };
                    payload.yearlyData.push(yearData);
                }

                let monthData = yearData.data.find((item) => item.month === month);
                if (monthData) {
                    monthData.value += value;
                } else {
                    yearData.data.push({ month, value });
                }

                const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/milkData/${livestock?.milkData.id}`, {
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
                                    Laktasi
                                </h1>
                                <div className='fieldFormVertical'>
                                    {/* <PrimaryTextField 
                                    width={350} 
                                    placeholder="SPW-018" 
                                    label="ID Pasangan *" 
                                    disabled={true} 
                                    /> */}
                                    <div>
                                        <Label title="Tanggal *" />
                                        <Input
                                            disabled={false}
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>

                                    {/* <PrimaryTextField width={350} placeholder='DD/MM/YYYY'label='Tanggal Lahir *'/> */}
                                    {/* <h1>Date of Birth *</h1>
                                    <Input disabled={false} type="text" placeholder="DD/MM/YYY" className="styledInput" /> */}

                                    {/* <Label title="Laktasi *" />
                                    <Input disabled={false} type="number" placeholder="Laktasi" className="styledInput" /> */}

                                    <div className="row-lactation">
                                    {/* <PrimaryTextField 
                                    width={76} 
                                    placeholder="Ke-1" 
                                    label="Laktasi *" 
                                    disabled={true} 
                                    /> */}

                                        <div>
                                            <Label title="Jumlah anak" />
                                            <div className="input-group-addTernak">
                                                <Input disabled={false} type="number" placeholder="liter" value={value}   onChange={(e) => setValue(Number(e.target.value))}/>
                                            </div>
                                        </div>   

                                    </div>


                                    {/* <div className='row-lactation'>
                                        <PrimaryTextField width={250} placeholder='Jenis Kelamin'label='Jenis Kelamin (pilihan) *'/>
                                        <div className="textField">
                                            <h1 className="jenisKelaminLactationForm">Jenis Kelamin (pilihan) *</h1>
                                            <DropdownFase
                                                options={['Jantan', 'Betina']}
                                                placeholder="Jenis Kelamin"
                                                onSelect={handleDropdownSelect}
                                            />
                                        </div>

                                        <div className="textField">
                                            <h1 className="jenisKelaminLactationForm">Jenis Kelamin (pilihan) *</h1>
                                            <DropdownFase
                                                options={['Jantan', 'Betina']}
                                                placeholder="Jenis Kelamin"
                                                onSelect={handleDropdownSelect}
                                            />
                                        </div>
                                      
                                    </div> */}
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default LivestockLactationPage

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