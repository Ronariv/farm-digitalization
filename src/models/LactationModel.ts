interface LactationChild {
    id: number;
    lactationId: number;
    gender: 'MALE' | 'FEMALE';
    createdAt: string;
    updatedAt: string;
  }
  
  interface LactationRecord {
    id: number;
    animalId: number;
    spouseId: number;
    lactation_number: number;
    dob: string;
    total_child: number;
    total_male_child: number;
    total_female_child: number;
    createdAt: string;
    updatedAt: string;
    lactationChilds: LactationChild[];
  }