import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google";
import Link from "next/link";

export default function OnBoarding() {
  return (
    <div className="flex h-screen">

      <div className="flex-1 bg-gray-200"></div>

      <div className="flex justify-end items-center flex-2 p-4 pr-20 mr-20 pl-20 ml-20">
        <div className="flex flex-col space-y-7 ">

          <Link href="/layout">
          <Button
           className="w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]"
          >
            Login
          </Button>
          </Link>

          <Button
            className="w-[15.5625rem] h-[3.25rem] rounded-[10px] border border-[#248543] text-[#248543] hover:bg-[#248543]/10"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

