'use client'

import React, { useState } from 'react';
// import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
// import { phaseLabels } from "@/data/phaseLabels";
import HealthStatus from "@/components/ui/healthStatus"; // Import komponen

const App: React.FC = () => {
//   const [phases, setPhases] = useState(phaseLabels);
//   const kondisi: StatusType = "sehat";

  return (
    <div className="icon-health">
      <HealthStatus status="tidakSehat" />
    </div>
  );
};

export default App;
