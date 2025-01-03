'use client'

import React, { useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
// import HealthStatus from "@/components/ui/healthStatus"; 
// import GenderIcon from '@/components/ui/genderIcon';
import EditButton from '@/components/ui/EditButton/editButton';
import DeleteButton from '@/components/ui/DeleteButtonIcon/deleteButton';

const App: React.FC = () => {
//   const [phases, setPhases] = useState(phaseLabels);
//   const kondisi: StatusType = "sehat";
    // const handleClick = () => {
    //     alert("Tombol Ubah Data diklik!");
    // };

    const handleDelete = () => {
        alert("Tombol Hapus Ternak diklik!");
    };

    return (
        // <div className="icon-gender">
        //   {/* <HealthStatus status="tidakSehat" /> */}
        //   {/* <GenderIcon gender="betina" /> */}
        // </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* <EditButton onClick={handleClick} /> */}
        <DeleteButton onClick={handleDelete} />
        </div>
        
    );
};

export default App;
