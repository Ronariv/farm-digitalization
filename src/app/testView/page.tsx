'use client'

import React, { useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
import HealthStatus from "@/components/ui/healthStatus"; 
import GenderIcon from '@/components/ui/genderIcon';

const App: React.FC = () => {
//   const [phases, setPhases] = useState(phaseLabels);
//   const kondisi: StatusType = "sehat";

  return (
    <div className="icon-gender">
      {/* <HealthStatus status="tidakSehat" /> */}
      <GenderIcon gender="betina" />
    </div>
    
  );
};

export default App;
