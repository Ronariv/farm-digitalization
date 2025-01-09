import React from 'react';
import { PhaseLabel } from '@/models/phaseModel';
import styles from "@/components/ui/PhaseLabel/PhaseLabel.module.css";

interface PhaseLabelProps {
  phases: PhaseLabel[]; // Data fase yang diterima
  filterId?: string;
  width?: number;
}
const PhaseLabelTag: React.FC<PhaseLabelProps> = ({ phases, filterId, width }) => {
    const filteredPhases = filterId ? phases.filter((phase) => phase.enum === filterId) : phases;

    // return (
    //     <div className={styles.container}>
    //     {filteredPhases.map((phase) => (
    //     <div
    //       key={phase.id}
    //       className={styles.tag} 
    //       style={{ backgroundColor: phase.color, width: ${width}px 
    //     }}
    //     >
    //       {phase.label}
    //     </div>
    //   ))}
    //     </div>
    // );
    
    return (
      <div className={styles.container}>
        {filteredPhases.map((phase) => (
          <div
            key={phase.id}
            className={styles.tag}
            style={{
              backgroundColor: phase.color,
              width: width ? `${width}px` : "auto", // Atur width jika diberikan, default 'auto'
            }}
          >
            <span className={styles.label}
            style={{
              width: width ? `${width}px` : "auto"
            }}
            >
              
            </span>
            {phase.label}
          </div>
        ))}
      </div>
    );
};

export default PhaseLabelTag;