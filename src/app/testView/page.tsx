'use client'

import React, { useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
// import HealthStatus from "@/components/ui/healthStatus"; 
// import GenderIcon from '@/components/ui/genderIcon';
import EditButton from '@/components/ui/EditButton/editButton';
import AddButton from '@/components/ui/AddButton/addButton';
import InviteOperatorButton from '@/components/ui/InviteOperatorButton/inviteOperatorButton';
import UpdateButton from '@/components/ui/UpdateButton/updateButton';

const App: React.FC = () => {
//   const [phases, setPhases] = useState(phaseLabels);
//   const kondisi: StatusType = "sehat";
    // const handleClick = () => {
    //     alert("Tombol Ubah Data diklik!");
    // };

    // const handleAdd = () => {
    //     alert("Tombol Hapus Ternak diklik!");
    // };

    // const handleInvite = () => {
    //     alert("Tombol Invite Ternak diklik!");
    // };
    const handleUpdate = () => {
        alert("Tombol Invite Ternak diklik!");
    };

    return (
        // <div className="icon-gender">
        //   {/* <HealthStatus status="tidakSehat" /> */}
        //   {/* <GenderIcon gender="betina" /> */}
        // </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {/* <EditButton onClick={handleClick} /> */}
        {/* <InviteOperatorButton onClick={handleInvite} /> */}
        <UpdateButton onClick={handleUpdate} />
        </div>
        
    );
};

export default App;
