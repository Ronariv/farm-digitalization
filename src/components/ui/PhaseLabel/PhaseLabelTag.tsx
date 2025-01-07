import React from 'react';
import { PhaseLabel } from "@/models/phaseModel";
import styles from "@/components/ui/PhaseLabel/PhaseLabel.module.css";

interface PhaseLabelProps {
  phases: PhaseLabel[]; // Data fase yang diterima
  filterId?: string;
}
const PhaseLabelTag: React.FC<PhaseLabelProps> = ({ phases, filterId }) => {
    const filteredPhases = filterId ? phases.filter((phase) => phase.enum === filterId) : phases;

    return (
        <div className={styles.container}>
        {filteredPhases.map((phase) => (
        <div
          key={phase.id}
          className={styles.tag} 
          style={{ backgroundColor: phase.color }}
        >
          {phase.label}
        </div>
      ))}
        </div>
    );
};

export default PhaseLabelTag;