import React from 'react';
import DetailAnimalFemaleCard from '@/components/ui/DetailAnimalFemaleCard/detailAnimalFemaleCard';
import animalFemaleCategories from '@/models/detailAnimalFemaleCategories';
import DetailAnimalMaleCard from '@/components/ui/DetailAnimalMaleCard/detailAnimalMaleCard';
import animalMaleCategories from '@/models/detailAnimalMaleCategories';
import animalDiagnosedCategories from '@/models/detailAnimalDiagnosedCategories';

const AnimalCategoriesPage = () => {
    const filteredAnimalFemaleCategories = animalFemaleCategories.filter(
        (category) => category.type === 'kambing' 
    );

    const filteredAnimalMaleCategories = animalMaleCategories.filter(
        (category) => category.type === 'kambing'
    )

    const filteredAnimalDiagnosedCategories = animalDiagnosedCategories.filter(
      (category) => category.type === 'kambing'
    )
      
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
      {filteredAnimalFemaleCategories.map((category) => (
        <DetailAnimalFemaleCard
          key={category.type} 
          title={category.tittle}
          total={category.total}
          pedet={category.pedet}
          dara={category.dara}
          siapKawin={category.siapKawin}
          hamil={category.hamil}
          menyusui={category.menyusui}
        />
      ))}

      {filteredAnimalMaleCategories.map((category) => (
        <DetailAnimalMaleCard
          key={category.type} 
          title={category.tittle}
          total={category.total}
          pedet={category.pedet}
          siapKawin={category.siapKawin}
        />
      ))}

      {filteredAnimalDiagnosedCategories.map((category) => (
        <DetailAnimalMaleCard
          key={category.type} 
          title={category.tittle}
          total={category.total}
          pedet={category.sakit}
          siapKawin={category.hilang}
        />
      ))}

    </div>
  );
};

export default AnimalCategoriesPage;
