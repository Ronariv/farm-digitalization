'use client'

import React, { useState } from 'react';
import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";
import { phaseLabels } from "@/data/phaseLabels";

const App: React.FC = () => {
  const [phases, setPhases] = useState(phaseLabels);

  return (
    <div>
      <h1>Phase Label: Hamil</h1>
      {/* Hanya menampilkan label Cempe */}
      <PhaseLabelButton phases={phases}  filterId="4" />
    </div>
  );
};

export default App;
