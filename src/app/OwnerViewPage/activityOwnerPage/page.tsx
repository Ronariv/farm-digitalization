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


const ActivityPage: React.FC = () => {
    const router = useRouter()
    
    const [selectedFarm, setSelectedFarm] = useState(farmListData[0].name || '');

    const handleFarmChange = (farmName: string) => {
        setSelectedFarm(farmName);
    };

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
                
                    <div className="content">
                    <div className="menuSection">
                    <div className="menuHeader">
                        <h1 className="menuTittle">Aktivitas Tim</h1>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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