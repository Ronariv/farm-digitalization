"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validateEmailOrPhone, validatePassword } from "@/controllers/validationLoginRegister";

export default function InputDemo() {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleValidationAndSubmit = () => {
      // Validasi email atau nomor HP
      const emailValidation = validateEmailOrPhone(emailOrPhone);
      if (!emailValidation.valid) {
        setErrorMessage("Masukkan email atau nomor HP yang valid.");
        return;
      }
  
      // Validasi password dan konfirmasi password
      const passwordValidation = validatePassword(password, rePassword);
      if (!passwordValidation.valid) {
        setErrorMessage(passwordValidation.message);
        return;
      }
  
      // Jika semua validasi lolos
      setErrorMessage("");
      alert("Registrasi berhasil!");
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
  
            <div>
              <label htmlFor="reinput-password" className="block mb-2 text-sm">
                Masukkan ulang kata sandi
              </label>
              <Input
                id="reinput-password"
                type="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="rounded-[3px]"
                placeholder="Konfirmasi Password"
              />
            </div>
  
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
  
            <div>
              <Button
                className="w-[15.5625rem] h-[3.25rem] rounded-[10px] bg-[#248543] text-white hover:text-[#248543]"
                onClick={handleValidationAndSubmit}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }