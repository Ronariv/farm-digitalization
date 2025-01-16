import React, { useState } from 'react';
import styles from './AddGambarTernak.module.css';

const AddGambarTernak: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className={styles.container}>
      {selectedImage ? (
        <img 
          src={selectedImage} 
          alt="Preview Foto" 
          className={styles.imagePreview} 
        />
      ) : (
        <label htmlFor="uploadInput" className={styles.label}>
          Tambah Foto
          <input 
            type="file" 
            id="uploadInput" 
            className={styles.input} 
            accept="image/*" 
            onChange={handleImageUpload} 
          />
        </label>
      )}
    </div>
  );
};

export default AddGambarTernak;
