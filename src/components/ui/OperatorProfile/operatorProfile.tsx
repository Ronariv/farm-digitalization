import React from "react";
import Image from "next/image";
import styles from "./OperatorProfile.module.css";

interface OperatorProfileProps {
  src: string;
  altText: string;
}

const OperatorProfile = ({ src, altText }: OperatorProfileProps) => {
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

export default OperatorProfile;
