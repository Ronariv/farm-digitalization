"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { validateEmailOrPhone } from "@/controllers/validationLoginRegister";

export default function InputDemo() {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

    const handleValidationAndSubmit = () => {
      // Validasi email atau nomor HP
      const validation = validateEmailOrPhone(emailOrPhone);
      if (!validation.valid) {
        setErrorMessage("Masukkan email atau nomor HP yang valid.");
      } else if(!username){
        setErrorMessage("Username tidak boleh kosong ")
      } else{
        setErrorMessage("");
      }
    };

  return (
    <div className="h-screen bg-gray-100 flex justify-end items-center pr-[148px]">
    {/* Card */}
    <div className="bg-white w-[400px] p-8 rounded-[34px] shadow-md">
      {/* Placeholder for Title */}
      <div className="tittle-step">Langkah 1/2</div>
      <div className="tittle-register mb-6">
        Buat Akun Anda
      </div>
  
      {/* Form Fields */}
      <form className="space-y-4">
        {/* Email / Nomor HP */}
        <div className="form-email">
          <label
            htmlFor="emailOrPhone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nama Pengguna
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-[5px] placeholder:text-[#B3B3B3]"
            placeholder="Nama anda"
          />
        </div>

        <div className="form-email">
          <label
            htmlFor="emailOrPhone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email / No HP
          </label>
          <Input
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-[5px] placeholder:text-[#B3B3B3]"
            placeholder="emailanda@gmail.com"
          />
        </div>
  
          {/* Error Message */}
          {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
           )}

        <div className="label-register1">Apa Posisi Anda?</div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pemilik
          </label>

          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Karyawan
          </label>
        </div>
         

        {/* Submit Button */}
        <div className="button-register">
          <Link href="/registerStep2Page">
            <Button
            className="w-[13.813rem] h-[3.25rem] rounded-md bg-[#248543] text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-[10px] font-normal"
            onClick={handleValidationAndSubmit}
            disabled={!emailOrPhone && !username}
          >
            Lanjut
          </Button>
          </Link>
        </div>

      </form>
  
    </div>
  </div>  
  );
}
