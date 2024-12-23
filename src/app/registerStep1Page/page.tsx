import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InputDemo() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-200"></div>
      <div className="flex justify-end items-center flex-2 p-4 pr-20 mr-20 pl-20 ml-20">
        <div className="flex flex-col space-y-7">
          <div>
            <label htmlFor="nameFarm" className="block mb-2 text-sm">
              Nama Peternakan
            </label>
            <Input
              id="nameFarm"
              type="text"
              className="rounded-[3px]"
              placeholder="Nama Peternakan"
            />
          </div>
          <div>
            <label htmlFor="nameOwner" className="block mb-2 text-sm">
              Nama Owner
            </label>
            <Input
              id="nameOwner"
              type="text"
              className="rounded-[3px]"
              placeholder="Nama Owner"
            />
          </div>
         
          <div>
            <Link href="/registerStep2Page">
            <Button
              className="w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]"
            >
              Next
            </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}
