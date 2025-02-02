'use client'

import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookies";
import { useRouter, useSearchParams } from 'next/navigation'
import OperatorViewPage from "@/app/OperatorViewPage/page";
import OwnerViewPage from "@/app/OwnerViewPage/page";
import DefaultOwnerViewPage from "@/app/OwnerViewPage/defaultOwnerViewPage/page"
import DefaultOperatorViewpage from "@/app/OperatorViewPage/defaultOperatorViewPage/page"
import CombinedViewPage from "@/app/combinedViewPage/page";
import LivestockOwnerPage from "@/app/OwnerViewPage/livestockOwnerPage/page";
import LivestockOperatorPage from "@/app/OperatorViewPage/livestockOperatorPage/page";
import ActivityOwnerPage from "@/app/OwnerViewPage/activityOwnerPage/page"
import SettingOwnerPage from "@/app/OwnerViewPage/settingsOwnerPage/page"
import ActivityOperatorPage from "@/app/OperatorViewPage/activityOperatorPage/page"
import SettingsOperatorPage from "@/app/OperatorViewPage/settingsOperatorPage/page"
import SapiDetailStatisticsPage from "@/app/OwnerViewPage/detailStatisticsPage/sapiDetailStatisticsPage/page"
import KambingDetailStaticsPage from "@/app/OwnerViewPage/detailStatisticsPage/kambingDetailStatisticsPage/page"
import DombaDetailStaticsPage from "@/app/OwnerViewPage/detailStatisticsPage/dombaDetailStatisticsPage/page"


const DefaultViewPage: React.FC = () => {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const [breadcrumb, setBreadcrumb] = useState("Statistik");
  const [isFarmInvited, setIsFarmInvited] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchedRole = getCookie("role");
    console.log("Role fetched from cookie:", fetchedRole);
    setRole(fetchedRole);
  }, []);

//   if (role === "owner") {
//     return <OwnerViewPage />;
//   }

//   if (role === "operator") {
//     return <OperatorViewPage />;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Role tidak valid</h1>
//       <p>Silakan login kembali untuk mendapatkan akses yang sesuai.</p>
//     </div>
//   );
// };

const view = searchParams.get("view");

const renderViewBasedOnRole = () => {
  if (role === "owner") {
    if (!isFarmInvited) {
      return <DefaultOwnerViewPage setIsFarmInvited={setIsFarmInvited} />;
    }
    // return <OwnerViewPage breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb} />;
    switch (view) {
      case "livestock":
        return <LivestockOwnerPage />;
      case "activity":
        return <ActivityOwnerPage />;
      case "settings":
          return <SettingOwnerPage />;
      case "sapi":
          return <SapiDetailStatisticsPage />;
      case "kambing":
            return <KambingDetailStaticsPage />;
      case "domba":
            return <DombaDetailStaticsPage />;
     
      default:
        return <OwnerViewPage breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb} />;
    }
  }

  if (role === "operator") {
    if (!isFarmInvited) {
      return <DefaultOperatorViewpage />;
    }
    switch (view){
      case "livestock":
        return <LivestockOperatorPage />;
      case "activity":
        return <ActivityOperatorPage />;
      case "settings":
          return <SettingsOperatorPage />;
      default:
      return <OperatorViewPage breadcrumb={breadcrumb} setBreadcrumb={setBreadcrumb} />;
    }
    
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Role tidak valid</h1>
      <p>Silakan login kembali untuk mendapatkan akses yang sesuai.</p>
    </div>
  );
};

return (
  <div>
    {renderViewBasedOnRole()}
  </div>
);
};

export default DefaultViewPage;
