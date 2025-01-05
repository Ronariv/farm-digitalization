import CategoryAnimalCard from '@/components/ui/CategoryAnimalCard/categoryAnimalCard';
import animalCategories from '../models/animalCategories';

const AnimalCategoryPage = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', margin: '20px' }}>
      {animalCategories.map((category) => (
        <CategoryAnimalCard
          key={category.type}
          icon={category.icon}
          title={category.title}
          total={category.total}
          maleCount={category.maleCount}
          femaleCount={category.femaleCount}
        />
      ))}
    </div>
  );
};

export default AnimalCategoryPage;
