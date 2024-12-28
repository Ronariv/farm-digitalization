import CategoryAnimalCard from "@/components/ui/CategoryAnimalCard/categoryAnimalCard";

const AnimalCategoryPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <CategoryAnimalCard
        icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="87" viewBox="0 0 97 87" fill="none">
                <path d="M84.3035 0.773346C86.2063 13.0356 70.1209 14.3393 61.8404 13.4584L59.4619 12.9299L68.1829 19.8009C88.6904 18.321 87.4748 6.49924 84.3035 0.773346Z" fill="#642C07"/>
                <path d="M13.6887 0.773346C11.7859 13.0356 27.8713 14.3393 36.1518 13.4584L38.5303 12.9299L29.8093 19.8009C9.30177 18.321 10.5174 6.49924 13.6887 0.773346Z" fill="#642C07"/>
                <path d="M70.566 23.6065L64.0163 31.6775C63.1756 32.7135 62.6814 34.0918 63.4885 35.1542C64.9335 37.0563 68.67 39.4562 76.8282 40.6785C84.7727 41.8687 90.5208 36.8466 93.9321 31.8015C95.9097 28.8767 93.9016 25.2387 90.4445 24.5212L76.2621 21.5774C74.1333 21.1356 71.9359 21.9183 70.566 23.6065Z" fill="#C28737"/>
                <path d="M26.4213 23.6065L32.971 31.6775C33.8117 32.7135 34.3059 34.0918 33.4988 35.1542C32.0538 37.0563 28.3173 39.4562 20.1591 40.6785C12.2146 41.8687 6.46647 36.8466 3.05525 31.8015C1.07761 28.8767 3.08575 25.2387 6.54279 24.5212L20.7252 21.5774C22.854 21.1356 25.0514 21.9183 26.4213 23.6065Z" fill="#C28737"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M40.7905 12.4014C31.0556 12.4014 23.6195 21.092 25.1249 30.7098L30.2238 63.2847C30.8218 67.1053 32.7533 70.4286 35.4992 72.8104C36.8804 69.766 39.9466 67.6485 43.5074 67.6485H53.7213C57.3035 67.6485 60.3851 69.7914 61.7542 72.8653C64.5765 70.443 66.5494 67.0327 67.1191 63.1133L71.8538 30.5384C73.2439 20.974 65.8273 12.4014 56.1623 12.4014H40.7905Z" fill="#E0B87D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M41.2263 71.5983C37.7234 71.5983 34.8838 74.4379 34.8838 77.9408V78.9979C34.8838 81.4714 36.2997 83.6142 38.3652 84.66C38.1644 84.0421 38.0558 83.3826 38.0558 82.6977V81.1121C38.0558 77.6092 40.8955 74.7695 44.3984 74.7695H52.8551C56.358 74.7695 59.1976 77.6092 59.1976 81.1121V82.6977C59.1976 83.3822 59.0892 84.0414 58.8885 84.659C60.953 83.6129 62.3681 81.4706 62.3681 78.9979V77.9408C62.3681 74.4379 59.5284 71.5983 56.0256 71.5983H41.2263Z" fill="#E0B87D"/>
                <rect x="39.6406" y="77.9408" width="17.9705" height="8.98525" rx="4.49263" fill="#C28737"/>
                <path d="M22.7663 35.4284C22.9564 33.9073 24.0648 32.661 25.5532 32.2947L26.763 31.9969C29.0537 31.433 31.2799 33.1282 31.3457 35.4863L31.4369 38.7571C31.4431 38.9804 31.4696 39.2028 31.5159 39.4214L32.0602 41.9883C32.5934 44.5027 30.4634 46.7812 27.9188 46.4185L27.5553 46.3667C26.5129 46.2181 25.5831 45.6323 24.999 44.7562L22.9005 41.6084C22.408 40.8696 22.1976 39.9783 22.3077 39.0972L22.7663 35.4284Z" fill="#864A14"/>
                <path d="M74.8734 35.4284C74.6833 33.9073 73.5749 32.661 72.0864 32.2947L70.8766 31.9969C68.5859 31.433 66.3597 33.1282 66.294 35.4863L66.2027 38.7571C66.1965 38.9804 66.1701 39.2028 66.1237 39.4214L65.5794 41.9883C65.0462 44.5027 67.1763 46.7812 69.7209 46.4185L70.0843 46.3667C71.1268 46.2181 72.0565 45.6323 72.6406 44.7562L74.7392 41.6084C75.2317 40.8696 75.4421 39.9783 75.332 39.0972L74.8734 35.4284Z" fill="#864A14"/>
                <ellipse cx="48.6257" cy="12.6656" rx="13.2136" ry="7.13535" fill="#E0B87D"/>
                <path d="M38.9362 24.575C37.2263 20.1727 42.4254 16.332 46.1307 19.2604L46.3699 19.4494C47.9842 20.7252 50.2788 20.6678 51.8273 19.3129C55.1236 16.4287 60.1067 19.7871 58.6705 23.9249L54.1361 36.9882C53.3693 39.1974 51.2874 40.6785 48.9489 40.6785C46.6837 40.6785 44.6509 39.2873 43.8307 37.1758L38.9362 24.575Z" fill="white"/>
            </svg>
        }
        title="Sapi"
        total={30}
        maleCount={999}
        femaleCount={999}
      />
    </div>
  );
};

export default AnimalCategoryPage;