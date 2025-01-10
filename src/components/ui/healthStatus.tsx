'use client';

import React from 'react';
import { StatusType } from '@/models/HealthStatusModel';

interface HealthStatusProps {
  status: StatusType;
}

const HealthStatus: React.FC<HealthStatusProps> = ({ status }) => {
  const icons = {
    sehat: (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="w-8 h-8 text-blue-500"
    //     viewBox="0 0 14 14"
    //     fill="none"
    //   >
    //     <g clipPath="url(#clip0_1176_1159)">
    //       <path
    //         d="M0.251638 9.41635C0.251638 11.3931 1.51983 13.0492 3.20393 13.0492H4.40397C3.1767 12.1744 2.6312 10.8521 2.6585 9.34958C2.67896 7.68007 3.34028 6.48471 3.93353 5.76347H2.95167C1.43123 5.76347 0.251638 7.3662 0.251638 9.41635ZM3.57215 9.36961C3.53124 11.8071 5.54942 13.6502 8.71991 13.6769L9.64037 13.6836C10.5267 13.6903 11.1813 13.6235 11.5495 13.5234C12.0813 13.3965 12.5927 13.0826 12.5927 12.4482C12.5927 12.1944 12.5245 12.0008 12.4427 11.8605C12.3881 11.7804 12.3949 11.7069 12.4836 11.6735C12.8995 11.5066 13.254 11.1126 13.254 10.5917C13.254 10.2845 13.1654 10.0241 13.0086 9.83707C12.9336 9.7369 12.9472 9.65009 13.07 9.57663C13.3768 9.403 13.595 9.02903 13.595 8.59496C13.595 8.28109 13.4927 7.95387 13.3154 7.7936C13.1995 7.7001 13.22 7.63332 13.3359 7.53315C13.5472 7.35952 13.6836 7.05901 13.6836 6.67837C13.6836 6.03728 13.1722 5.5097 12.4972 5.5097H10.0972C9.49037 5.5097 9.0881 5.20253 9.0881 4.70832C9.0881 3.82016 10.2199 2.18403 10.2199 1.00873C10.2199 0.38097 9.81765 0.0203867 9.27901 0.0203867C8.79491 0.0203867 8.55627 0.3476 8.29718 0.848437C7.28126 2.77841 5.93126 4.34104 4.90171 5.68333C4.02898 6.81862 3.59938 7.7936 3.57215 9.36961Z"
    //         fill="currentColor"
    //       />
    //     </g>
    //     <defs>
    //       <clipPath id="clip0_1176_1159">
    //         <rect
    //           width="13.6842"
    //           height="13.6842"
    //           fill="white"
    //           transform="matrix(-1 0 0 -1 13.6836 13.6842)"
    //         />
    //       </clipPath>
    //     </defs>
    //   </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
        <path d="M13.4339 26C13.718 26 14.1238 25.8081 14.4216 25.6299C22.0381 20.6958 26.8678 14.9531 26.8678 9.11439C26.8678 4.26252 23.5804 0.83606 19.3324 0.83606C16.6943 0.83606 14.665 2.31629 13.4339 4.57776C12.2299 2.33 10.1735 0.83606 7.53543 0.83606C3.28745 0.83606 0 4.26252 0 9.11439C0 14.9531 4.82971 20.6958 12.4598 25.6299C12.7439 25.8081 13.1498 26 13.4339 26Z" fill="#EAF0FB"/>

        <g transform="translate(7 6)"> 
            <g clipPath="url(#clip0)">
            <path d="M0.251638 9.41635C0.251638 11.3931 1.51983 13.0492 3.20393 13.0492H4.40397C3.1767 12.1744 2.6312 10.8521 2.6585 9.34958C2.67896 7.68007 3.34028 6.48471 3.93353 5.76347H2.95167C1.43123 5.76347 0.251638 7.3662 0.251638 9.41635ZM3.57215 9.36961C3.53124 11.8071 5.54942 13.6502 8.71991 13.6769L9.64037 13.6836C10.5267 13.6903 11.1813 13.6235 11.5495 13.5234C12.0813 13.3965 12.5927 13.0826 12.5927 12.4482C12.5927 12.1944 12.5245 12.0008 12.4427 11.8605C12.3881 11.7804 12.3949 11.7069 12.4836 11.6735C12.8995 11.5066 13.254 11.1126 13.254 10.5917C13.254 10.2845 13.1654 10.0241 13.0086 9.83707C12.9336 9.7369 12.9472 9.65009 13.07 9.57663C13.3768 9.403 13.595 9.02903 13.595 8.59496C13.595 8.28109 13.4927 7.95387 13.3154 7.7936C13.1995 7.7001 13.22 7.63332 13.3359 7.53315C13.5472 7.35952 13.6836 7.05901 13.6836 6.67837C13.6836 6.03728 13.1722 5.5097 12.4972 5.5097H10.0972C9.49037 5.5097 9.0881 5.20253 9.0881 4.70832C9.0881 3.82016 10.2199 2.18403 10.2199 1.00873C10.2199 0.38097 9.81765 0.0203867 9.27901 0.0203867C8.79491 0.0203867 8.55627 0.3476 8.29718 0.848437C7.28126 2.77841 5.93126 4.34104 4.90171 5.68333C4.02898 6.81862 3.59938 7.7936 3.57215 9.36961Z" fill="#1C7BD2"/>
            </g>
            <defs>
            <clipPath id="clip0">
                <rect width="13.684" height="13.684" fill="white" transform="matrix(-1 0 0 -1 13.6836 13.6842)"/>
            </clipPath>
            </defs>
        </g>
    </svg>


    ),
    tidakSehat: (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
        <path d="M13.4339 26C13.718 26 14.1238 25.8081 14.4216 25.6299C22.0381 20.6958 26.8678 14.9531 26.8678 9.11439C26.8678 4.26252 23.5804 0.83606 19.3324 0.83606C16.6943 0.83606 14.665 2.31629 13.4339 4.57776C12.2299 2.33 10.1735 0.83606 7.53543 0.83606C3.28745 0.83606 0 4.26252 0 9.11439C0 14.9531 4.82971 20.6958 12.4598 25.6299C12.7439 25.8081 13.1498 26 13.4339 26Z" fill="#F8E2E2"/>
        
        <g transform="translate(6.5 6)"> 
            <g clipPath="url(#clip0)">
            <path d="M14.2738 5.11001C14.2738 3.13331 13.0056 1.47716 11.3215 1.47716H10.1214C11.3487 2.35198 11.8942 3.67423 11.8669 5.17679C11.8464 6.8463 11.1851 8.04166 10.5919 8.76289H11.5737C13.0942 8.76289 14.2738 7.16017 14.2738 5.11001ZM10.9532 5.15676C10.9942 2.71927 8.97597 0.876135 5.80548 0.849422L4.88502 0.842744C3.99864 0.836066 3.34409 0.902847 2.97591 1.00302C2.44408 1.1299 1.93272 1.44377 1.93272 2.07818C1.93272 2.33195 2.0009 2.52561 2.08271 2.66585C2.13726 2.74598 2.13044 2.81945 2.04181 2.85283C1.6259 3.01979 1.27135 3.41379 1.27135 3.93468C1.27135 4.24186 1.35998 4.50231 1.5168 4.68929C1.5918 4.78947 1.57817 4.87628 1.45544 4.94974C1.14862 5.12337 0.930434 5.49733 0.930434 5.93141C0.930434 6.24527 1.03271 6.5725 1.20998 6.73277C1.32589 6.82626 1.30544 6.89305 1.18953 6.99322C0.978161 7.16685 0.841797 7.46736 0.841797 7.848C0.841797 8.48909 1.35317 9.01666 2.02817 9.01666H4.42819C5.03502 9.01666 5.43729 9.32384 5.43729 9.81805C5.43729 10.7062 4.30547 12.3423 4.30547 13.5176C4.30547 14.1454 4.70774 14.506 5.24638 14.506C5.73048 14.506 5.96912 14.1788 6.22821 13.6779C7.24413 11.748 8.59413 10.1853 9.62368 8.84304C10.4964 7.70774 10.926 6.73277 10.9532 5.15676Z" fill="#D21C1C"/>
            </g>
            <defs>
            <clipPath id="clip0">
                <rect width="13.6842" height="13.6842" fill="white" transform="translate(0.841797 0.842163)"/>
            </clipPath>
            </defs>
        </g>
    </svg>

    ),
  };

  return <div className="flex justify-center items-center">{icons[status]}</div>;
};

export default HealthStatus;
