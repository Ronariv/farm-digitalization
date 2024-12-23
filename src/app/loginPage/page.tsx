"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validateEmailOrPhone } from "@/controllers/validationLoginRegister";

export default function InputDemo() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidationAndSubmit = () => {
    const validation = validateEmailOrPhone(emailOrPhone);

    if (!validation.valid) {
      setErrorMessage("Masukkan email atau nomor HP yang valid.");
    } else if (!password) {
      setErrorMessage("Password tidak boleh kosong.");
    } else {
      setErrorMessage("");
      alert("Login berhasil!");
    }
  };

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
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="rounded-[3px]"
              placeholder="Email atau Nomor HP"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Kata Sandi
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-[3px]"
              placeholder="Password"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
          <div>
            <Button
              className="w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]"
              onClick={handleValidationAndSubmit}
              disabled={!emailOrPhone && !password}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}