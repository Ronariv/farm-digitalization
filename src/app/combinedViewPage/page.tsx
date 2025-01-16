'use client';

import React from 'react';
import OperatorViewPage from "@/app/operator/defaultOperatorViewPage/page";
import OwnerViewPage from "@/app/owner/defaultOwnerViewPage/page";

interface CombinedViewPageProps {
  role: string | null; // Role yang diambil dari cookie
}

const CombinedViewPage: React.FC<CombinedViewPageProps> = ({ role }) => {
  if (role === 'owner') {
    return <OwnerViewPage />;
  }

  if (role === 'operator') {
    return <OperatorViewPage />;
  }

  // Jika role tidak valid
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Role tidak valid</h1>
      <p>Silakan login kembali untuk mendapatkan akses yang sesuai.</p>
    </div>
  );
};

export default CombinedViewPage;
