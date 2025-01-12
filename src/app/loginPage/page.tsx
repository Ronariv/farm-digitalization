"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validateEmailOrPhone } from "@/controllers/validationLoginRegister";
import PrimaryButton from "@/components/ui/PrimaryButton/primaryButton";
import { useRouter } from 'next/navigation'

export default function InputDemo() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
     const router = useRouter()

  const handleValidationAndSubmit = () => {
    const validation = validateEmailOrPhone(emailOrPhone);

    if (!validation.valid) {
      setErrorMessage("Masukkan email atau nomor HP yang valid.");
    } else if (!password) {
      setErrorMessage("Password tidak boleh kosong.");
    } else {
      // setErrorMessage("");
      // alert("Login berhasil!");
      router.push(`OwnerViewPage/defaultOwnerViewPage`);
    }
  };

  return (
    <div className="containerLoginRegister h-screen bg-cover bg-gray-100 flex justify-end items-center pr-[148px]"
    >
        {/* Bagian Teks */}
    <div className="text-container pl-[148px] text-white">
      <h1 className="text-5xl font-bold leading-tight">
        Selamat Datang 
        <br />
        di 
        <span className="text-ternakku"> Ternakku</span> !

      </h1>
      <p className="text-desc">
        Beralih ke cara pintar dalam mengelola  <br /> peternakan Anda!
      </p>
    </div>

    {/* Card */}
    <div className="bg-white w-[400px] p-8 rounded-[34px] shadow-md">
      {/* Placeholder for Title */}
      <div className="tittle-login mb-6">
        Masuk ke <br />
        akun anda
      </div>
  
      {/* Form Fields */}
      <form className="space-y-4">
        {/* Email / Nomor HP */}
        <div className="form-email">
          <label
            htmlFor="emailOrPhone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email / Nomor HP
          </label>
          <Input
            id="emailOrPhone"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-[5px] placeholder:text-[#B3B3B3]"
            placeholder="Email atau Nomor HP"
          />
        </div>
  
        {/* Password */}
        <div className="form-password">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Kata Sandi
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-[5px] placeholder:text-[#B3B3B3]"
            placeholder="Minimal 8 karakter"
          />
        </div>
  
        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
  
        {/* Submit Button */}
        <div className="button-login">

        <PrimaryButton
        label="Masuk"
        width={221}
        onClick={() => router.push(`/OwnerViewPage/defaultOwnerViewPage`)}
        />
        </div>
      </form>
  
      {/* Placeholder for Footer */}
      <div className="mt-6">
        Baru di Ternakku?{" "}
        <span className="text-green-600 font-bold">Daftar</span>
      </div>
    </div>
  </div>  
  );
}