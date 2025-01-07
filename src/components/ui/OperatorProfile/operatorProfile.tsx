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

      {/* Dropdown Icon */}
      <div className={styles.dropdownIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
        >
          <g clipPath="url(#clip0_1162_10316)">
            <path
              d="M8.48633 10.7002C8.73047 10.7002 8.97461 10.6025 9.14062 10.417L16.6992 2.67286C16.8652 2.50683 16.9629 2.292 16.9629 2.04786C16.9629 1.54004 16.582 1.14941 16.0742 1.14941C15.8301 1.14941 15.6055 1.24707 15.4395 1.40333L7.95898 9.04981H9.00391L1.52344 1.40333C1.36719 1.24707 1.14258 1.14941 0.888672 1.14941C0.380859 1.14941 0 1.54004 0 2.04786C0 2.292 0.0976562 2.50684 0.263672 2.68262L7.82227 10.417C8.00781 10.6025 8.23242 10.7002 8.48633 10.7002Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1162_10316">
              <rect
                width="17.3242"
                height="10.4004"
                fill="white"
                transform="translate(0 0.299805)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default OperatorProfile;
