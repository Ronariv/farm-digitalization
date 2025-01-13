"use client";

import React, { use, useState } from 'react';

import Sidebar from '@/components/ui/Sidebar/sidebar';
import { livestockData } from '@/data/livestockData';
import GenderIcon from '@/components/ui/genderIcon';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryTextField from '@/components/ui/PrimaryTextField/primaryTextField';
import { useRouter } from 'next/navigation'
import DropdownInput from "@/components/ui/DropdownInput/DropdownInput";

interface LivestockMedicationPageProps {
    params: Promise<{
        id: string;
    }>;
}

const LivestockMedicationPage: React.FC<LivestockMedicationPageProps> = ({ params: paramsPromise }) => {
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

    const [textFields, setTextFields] = useState<React.ReactNode[]>([]);
     const router = useRouter(); 
     const options = ['Ivomex', 'Vormextin', 'Kututox', 'Biodin'];

     const handleFaseSelect = (value: string) => {
       console.log('Selected value:', value);
     };

     const handleUpdateData = () => {
        console.log("Data obat ternak berhasil diperbarui");
        alert("Data obat berhasil diperbarui");
      };

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
                                            router.push(`/OwnerViewPage/livestockOwnerPage/${livestock.name_id.toLowerCase()}/`); // Melakukan navigasi
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
                                    Riwayat Obat
                                </h1>
                                {
                                    textFields.map((field) => (
                                        field
                                    ))
                                }
                                <div className='addLivestockHistory'>
                                    {/* <PrimaryTextField width={350} placeholder='Masukkan Riwayat Vaksin'/>
                                    <div onClick={() => setTextFields([...textFields, <PrimaryTextField width={350} placeholder='Masukkan Riwayat Vaksin' />])}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.99165 6.49165 0.5 14.5 0.5C22.5084 0.5 29 6.99165 29 15C29 23.0084 22.5084 29.5 14.5 29.5C6.49165 29.5 0 23.0084 0 15ZM14.5 3.4C11.4235 3.4 8.47298 4.62214 6.29756 6.79756C4.12214 8.97298 2.9 11.9235 2.9 15C2.9 18.0765 4.12214 21.027 6.29756 23.2024C8.47298 25.3779 11.4235 26.6 14.5 26.6C17.5765 26.6 20.527 25.3779 22.7024 23.2024C24.8779 21.027 26.1 18.0765 26.1 15C26.1 11.9235 24.8779 8.97298 22.7024 6.79756C20.527 4.62214 17.5765 3.4 14.5 3.4Z" fill="#B3B3B3"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9508 7.75078C15.9508 7.36622 15.798 6.9974 15.5261 6.72548C15.2542 6.45355 14.8853 6.30078 14.5008 6.30078C14.1162 6.30078 13.7474 6.45355 13.4755 6.72548C13.2035 6.9974 13.0508 7.36622 13.0508 7.75078V13.5508H7.25078C6.86622 13.5508 6.4974 13.7035 6.22548 13.9755C5.95355 14.2474 5.80078 14.6162 5.80078 15.0008C5.80078 15.3853 5.95355 15.7542 6.22548 16.0261C6.4974 16.298 6.86622 16.4508 7.25078 16.4508H13.0508V22.2508C13.0508 22.6353 13.2035 23.0042 13.4755 23.2761C13.7474 23.548 14.1162 23.7008 14.5008 23.7008C14.8853 23.7008 15.2542 23.548 15.5261 23.2761C15.798 23.0042 15.9508 22.6353 15.9508 22.2508V16.4508H21.7508C22.1353 16.4508 22.5042 16.298 22.7761 16.0261C23.048 15.7542 23.2008 15.3853 23.2008 15.0008C23.2008 14.6162 23.048 14.2474 22.7761 13.9755C22.5042 13.7035 22.1353 13.5508 21.7508 13.5508H15.9508V7.75078Z" fill="#B3B3B3"/>
                                        </svg>
                                    </div> */}
                                     <DropdownInput
              // label="Pilih Kondisi"
              options={options}
              placeholder="Riwayat Obat"
              onSelect={handleFaseSelect}
      />
                                </div>
                                <DetailHistoryCard historyItems={livestock.health.history_items} />
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

export default LivestockMedicationPage

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
        <div className='livestockHistoryData'>
            {historyItems.map((history) => (
            <div className='livestockHistoryItem'>
                <h2>{history.title}</h2>
                <p>{history.value}</p>
            </div>
            ))}
        </div>
    );
};