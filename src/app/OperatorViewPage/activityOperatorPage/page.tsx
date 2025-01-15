"use client";

import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { Livestock } from '@/models/LivestockModel';
import { useRouter } from 'next/navigation'
import './ActivityPage.module.css'

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
import { User } from '@/models/UserModel';
import { usersData } from '@/data/userData';
import { ActivityModel } from '@/models/ActivityModel';
import { activities } from '@/data/activitiesData';
import TopBar from '@/components/ui/TopBar/topBar';
import PrimaryButton from '@/components/ui/PrimaryButton/primaryButton';
import MoreCard from '@/components/ui/MoreCard/MoreCard';
import InviteModal from '@/components/ui/InviteModal/InviteModal';
import MoreCardDelete from '@/components/ui/MoreCardDelete/MoreCardDelete';
import TopBarOpt from '@/components/ui/TopBarOpt/TopBarOpt';

const ActivityPage: React.FC = () => {
    const router = useRouter()
    
    const [selectedFarm, setSelectedFarm] = useState(farmListData[0].name || '');

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                  {/* <TopBar ></TopBar> */}
                  <TopBarOpt/>
                
                    <div className="content">
                    <div className="menuSection">
                    
                    <div className="menuHeader">

                      <div>
                         <h1 className="menuTittle">Aktivitas Tim</h1>
                      </div>
                       
                       <div className="primaryButton">

{isModalOpen && (
        <InviteModal
          users={usersData} // Gunakan data dari usersData
          onClose={() => setIsModalOpen(false)}
        />
      )}
                       </div>

                    </div>

                    <div className='activityInformation'>
                      <div className='activityInformationTeams'>
                        <h1 className='activityInformationTeamsHeading'>Anggota</h1>
                        <div className='activityInformationTeamsTable'>
                          <div className='activityInformationTeamsTableHeader'>
                            <h1>Nama</h1>
                            <div className='activityInformationTeamsTableCont'>
                              <h1>Posisi</h1>
                              <h1>Aktif Terakhir</h1>
                            </div>
                          </div>
                          <div className='activityInformationTeamsTableRows'>
                            {usersData.filter(user =>
                                user.owned_farms.includes(selectedFarm)
                            ).map((user) => (
                              <MemberRow user={user} role={'Pemilik'} />
                            ))}
                            {usersData.filter(user =>
                                user.operated_farms.includes(selectedFarm)
                            ).map((user) => (
                              <MemberRow user={user} role={'Operator'} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className='activities'>
                        <div className='activitiesHeader'>
                          <h1>Aktivitas</h1>
                        </div>
                        <div className='activitiesTimeline'>
                        {activities
                          .filter(activity => activity.farm.includes(selectedFarm))
                          .map((activity, index, array) => (
                            <ActivityRow 
                              key={activity.id}
                              activity={activity} 
                              isFirst={index === 0}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default ActivityPage

interface MemberRowProps {
    user: User;
    role: string;
}

const MemberRow: React.FC<MemberRowProps> = ({ user, role }) => {
  const [isViewMoreVisible, setIsViewMoreVisible] = useState(false);

  const handleViewMoreClick = () => {
    setIsViewMoreVisible((prev) => !prev); 
  };

    return (
      <div>
        <hr className='activityTeamHr'/>
        <div className='activityInformationTeamsTableRowsData'>
          <div className='activityInformationTeamsTableRowsDataMember'>
            <img src={user.profile_url} alt="" />
            <div className='activityInformationTeamsTableRowsDataMemberInfo'>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        <div className='activityInformationTeamsTableRowsDataInfo'>
          <div className='activityInformationTeamsTableRowsDataInfoPosition'>
            <div className='activityInformationTeamsTableRowsDataInfoPositionBox'>
              <h1>{role}</h1>
            </div>
            <TimeAgo timestamp={user.last_time_online} />
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={handleViewMoreClick}
        >
          <path
            d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Posisi absolute untuk MoreCard */}
        {isViewMoreVisible && (
          <div className="viewMoreContainer">
            <MoreCard />
          </div>
        )}
      </div>
        </div>
      </div>


      </div>
    );
};

interface AktivityRowProps {
  activity: ActivityModel;
  isFirst: boolean;
}

const ActivityRow: React.FC<AktivityRowProps> = ({ activity, isFirst }) => {
  const [isMoreCardDeleteVisible, setIsMoreCardDeleteVisible] = useState(false);

  const handleMorecardDeleteClick = () => {
    setIsMoreCardDeleteVisible((prev) => !prev); 
  };

  return (
    <div className='activitiesTimelineItem'>
      <div className='activitiesTimelineItemInformation'>
        <div className='activitiesTimelineItemInformationIndicator'>
          {isFirst 
          ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#248543"/>
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#B1B1B4"/>
            </svg>
          }
        <div className="divider"></div>
        </div>
        <div className='activitiesTimelineItemInformationData'>
          <div className='activitiesTimelineItemInformationDataTime'>
            <h1>
              {new Date(activity.timestamp).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              }).replace(':', '.')}
            </h1>
            <p>
              {new Date(activity.timestamp).toLocaleDateString('en-US', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
              })}
            </p>
          </div>
          <div className='activitiesTimelineItemInformationDataInformation'>
            <div className='activitiesTimelineItemInformationDataInformationMain'>
              <h1>{activity.title}</h1>
              <p>{activity.user}</p>
            </div>
            {activity.changes?.map((change) => (
              <p>{`${change.what}: ${change.from} -> ${change.to}`}</p>
            ))}
          </div>
        </div>
        <div className='activitiesTimelineItemAction'>
        
        <div style={{ position: "relative", display: "inline-block" }}>

         {/* Posisi absolute untuk MoreCard */}
         {isMoreCardDeleteVisible && (
          <div className="viewMoreContainer">
           <MoreCardDelete/>
          </div>
        )}

        </div>
       

      </div>
      </div>
    </div>
  );
};

interface TimeAgoProps {
  timestamp: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const formatTimeAgo = (timestamp: string ) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
  };

  return <h1>{formatTimeAgo(timestamp)}</h1>;
}