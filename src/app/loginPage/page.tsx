import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputDemo() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-200"></div>
      <div className="flex justify-end items-center flex-2 p-4 pr-20 mr-20 pl-20 ml-20">
        <div className="flex flex-col space-y-7">
          <div>
            <label htmlFor="emailOrPhone" className="block mb-2 text-sm">
              Email / Nomor HP
            </label>
            <Input
              id="emailOrPhone"
              type="text"
              className="rounded-[3px]"
              placeholder="Email atau Nomor HP"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <Input
              id="password"
              type="password"
              className="rounded-[3px]"
              placeholder="Password"
            />
          </div>
          <div>
            <Button
              className="w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
