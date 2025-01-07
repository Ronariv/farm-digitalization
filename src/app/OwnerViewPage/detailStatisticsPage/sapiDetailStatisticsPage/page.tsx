// 'use client'

// import React, { useState } from 'react';
// // import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// // import { phaseLabels } from "@/data/phaseLabels";
// // import HealthStatus from "@/components/ui/healthStatus"; 
// // import GenderIcon from '@/components/ui/genderIcon';
// import EditButton from '@/components/ui/EditButton/editButton';
// import AddButton from '@/components/ui/AddButton/addButton';
// import InviteOperatorButton from '@/components/ui/InviteOperatorButton/inviteOperatorButton';
// import UpdateButton from '@/components/ui/UpdateButton/updateButton';
// import PrintButton from '@/components/ui/PrintButton/printButton';
// import FilterButton from '@/components/ui/Filter/filterButton';
// import SortByButton from '@/components/ui/SortBy/sortBy';
// import YearAndMonthPicker from '@/components/ui/YearAndMonthPicker/yearAndMonthPicker';
// import Sidebar from '@/components/ui/Sidebar/sidebar';
// import SearchBar from '@/components/ui/SearchBar/searchBar';
// import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
// import OperatorProfile from '@/components/ui/OperatorProfile/operatorProfile';
// import Image from 'next/image';
// import OwnerProfile from '@/components/ui/OwnerProfile/ownerProfile';
// import Breadcrumbs from '@/components/ui/Breadcrumbs/breadcrumbs';
// import { usePathname } from 'next/navigation';
// import DetailAnimalFemaleCard from '@/components/ui/DetailAnimalFemaleCard/detailAnimalFemaleCard';
// import animalCategories from '@/models/detailAnimalFemaleCategories';
// import DetailAnimalMaleCard from '@/components/ui/DetailAnimalMaleCard/detailAnimalMaleCard';
// import detailAnimalMaleCategories from '@/models/detailAnimalMaleCategories';
// import DetailAnimalDiagnosedCard from '@/components/ui/DetailAnimalDiagnosedCard/detailAnimalDiagnosedCard';
// import animalDiagnosedCategories from '@/models/detailAnimalDiagnosedCategories';
// import StatisticsMilk from '@/components/ui/StatisticsMilk/statisticsMilk';
// import StatisticsLactation from '@/components/ui/StatisticsLactation/statisticsLactation';

// const App: React.FC = () => {

//   const [breadcrumb, setBreadcrumb] = useState('Statistik');

//     const handleUpdate = () => {
//         alert("Tombol Invite Ternak diklik!");
//     };

//     const handlePrint = () => {
//         alert("Tombol print sudah diklik!");
//     };

//     const handleFilter = () => {
//       alert("Tombol filter di klik");
//     };

//     const handleSortBy = () => {
//       alert("Tombol sort di klik");
//     };

//     const filteredFemaleCategories = animalCategories.filter(
//         (category) => category.type === 'sapi' 
//     );

//     const filteredMaleCategories = detailAnimalMaleCategories.filter(
//         (category) => category.type === 'sapi' 
//     );

//     const filteredDiagnosedCategories = animalDiagnosedCategories.filter(
//         (category) => category.type === 'sapi' 
//     );

//     function getMenuLabel(pathname: string): string {
//       switch (pathname) {
//         case '/OwnerViewPage':
//           return 'Statistik';
//         case '/livestockOwnerPage':
//           return 'Ternak Anda';
//         case '/activityOwnerPage':
//           return 'Aktivitas';
//         case '/settingsOwnerPage':
//           return 'Pengaturan';
//         default:
//           return 'Halaman Tidak Ditemukan';
//       }
//     }

//     return (
//     <div className="layout">
//       <div className="sidebar">
//       <Sidebar setBreadcrumb={setBreadcrumb} />
//       </div>

//       <div className="main-content">
        
//         <div className="header">
          
//           <div className="searchbar">
//           <SearchBar />
//           </div>

//           <div className="operatorProfile">
//           <OperatorProfile
//           src="/operator.jpeg" 
//           altText=" "
//           />
//           </div>

//           <div>
//             <OwnerProfile
//             src="/OwnerProfile.jpeg"
//             altText=" "
//             />
//           </div>

//         </div>
       
//         <div className="content">
//         <div className="menuSection">
//           <div>
//           <Breadcrumbs
//             breadcrumbs={[
//               { label: 'Peternakan Widjaya', href: '/OwnerViewPage' },
//               { label: 'Statistik', href: '/OwnerViewPage' },
//               { label: 'Sapi', href: '/OwnerViewPage/detailStatisticsPage/sapiDetailStatisticsPage' },
//             ]}
//           />
//           </div>

//           <div className="menuHeader">
//             <div>
//             <img src="/Sapi.svg" alt="Icon Sapi" style={{ width: '81.055px;', height: '72px' }} />
//             </div>
//             <h1 className="menuTittle">Sapi</h1>
//             <div className="yearAndMonthPicker">
//               <YearAndMonthPicker/>
//             </div>
//           </div>

//           <div className="sapiDetailStatisticsCard">
//             <div className="sapiFemaleCardStatisticsCard">
//                 {filteredFemaleCategories.map((category) => (
//                 <DetailAnimalFemaleCard
//                 key={category.type} // Gunakan type sebagai key
//                 title={category.tittle}
//                 total={category.total}
//                 pedet={category.pedet}
//                 dara={category.dara}
//                 siapKawin={category.siapKawin}
//                 hamil={category.hamil}
//                 menyusui={category.menyusui}
//                 />
//             ))}
//             </div>

//             <div className="sapiMaleCardStatisticsCard">
//                 {filteredMaleCategories.map((category) => (
//                 <DetailAnimalMaleCard 
//                 key={category.type}
//                 title={category.tittle} 
//                 total={category.total} 
//                 pedet={category.pedet}
//                 siapKawin={category.siapKawin}           
//                 />
//             ))} 
//             </div>

//             <div className="sapiMaleCardStatisticsCard">
//                 {filteredDiagnosedCategories.map((category) => (
//                 <DetailAnimalDiagnosedCard
//                 key={category.type}
//                 title={category.tittle}
//                 total={category.total}
//                 sakit={category.sakit}
//                 hilang={category.hilang}
//                 />
//             ))} 
//             </div>

//           </div>

//           <div className="statisticsCard">
//           <StatisticsMilk filterBy="year" filterValue={2019} />

//           <StatisticsLactation filterBy="year" filterValue={2019} />
//           </div>

//         </div>
//       </div>

//       </div>
//     </div>
//     );
// };

// export default App;