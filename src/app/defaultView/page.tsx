'use client'

import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";
import { useRouter } from 'next/navigation'
import OperatorViewPage from "@/app/operator/defaultOperatorViewPage/page";
import OwnerViewPage from "@/app/owner/defaultOwnerViewPage/page";

const DefaultViewPage: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchedRole = getCookie("role");
    console.log("Role fetched from cookie:", fetchedRole);
    setRole(fetchedRole);
  }, []);

  if (role === "owner") {
    return <OwnerViewPage />;
  }

  if (role === "operator") {
    return <OperatorViewPage />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Role tidak valid</h1>
      <p>Silakan login kembali untuk mendapatkan akses yang sesuai.</p>
    </div>
  );
};

export default DefaultViewPage;
