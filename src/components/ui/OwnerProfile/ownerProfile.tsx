import React from "react";
import Image from "next/image";
import styles from "./OwnerProfile.module.css";

interface OwnerProfileProps {
  src: string;
  altText: string;
}

const OwnerProfile = ({ src, altText }: OwnerProfileProps) => {
  return (
    <div className={styles.container}>
      {/* Gambar */}
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={altText}
          width={50}
          height={50}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default OwnerProfile;
