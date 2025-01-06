import React from 'react';
import DetailAnimalFemaleCard from '@/components/ui/DetailAnimalFemaleCard/detailAnimalFemaleCard';
import animalCategories from '@/models/detailAnimalFemaleCategories';

const AnimalCategoriesPage = () => {
    const filteredCategories = animalCategories.filter(
        (category) => category.type === 'kambing' // Filter berdasarkan type
      );
      
  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {filteredCategories.map((category) => (
        <DetailAnimalFemaleCard
          key={category.type} // Gunakan type sebagai key
          title={category.tittle}
          total={category.total}
          pedet={category.pedet}
          dara={category.dara}
          siapKawin={category.siapKawin}
          hamil={category.hamil}
          menyusui={category.menyusui}
        />
      ))}
    </div>
  );
};

export default AnimalCategoriesPage;
