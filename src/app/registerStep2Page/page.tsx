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
    <div className="h-screen bg-gray-100 flex justify-end items-center pr-[148px]">
      {/* Card */}
      <div className="bg-white w-[400px] p-8 rounded-[34px] shadow-md">
        {/* Title */}
        <div className="tittle-step2">Langkah 2/2</div>
        <div className="tittle-register2 mb-6">Buat Akun Anda</div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Kata Sandi
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 rounded-[5px] focus:border-green-500 placeholder:text-[#B3B3B3]"
              placeholder="Kata Sandi"
            />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label
              htmlFor="reinput-password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Masukkan ulang kata sandi
            </label>
            <Input
              id="reinput-password"
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-[5px] placeholder:text-[#B3B3B3]"
              placeholder="Konfirmasi Kata Sandi"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <div className="button-register2">
            <Button
              className="w-[13.813rem] h-[3.25rem] rounded-md bg-[#248543] text-white hover:bg-green-700 focus:outline-none focus:ring-2 rounded-[10px] focus:ring-green-500"
              onClick={handleValidationAndSubmit}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}