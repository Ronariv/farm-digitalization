"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import './globals.css'

export default function OnBoarding() {
  const router = useRouter();

  useEffect(() => {
    router.push("/ownerViewPage/loginPage");
  }, [router]);

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-200"></div>

      <div className="flex justify-end items-center flex-2 p-4 pr-20 mr-20 pl-20 ml-20">
        <div className="flex flex-col space-y-7 ">


        </div>
      </div>
    </div>
  );
}
