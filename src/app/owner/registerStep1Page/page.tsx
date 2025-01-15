"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { validateEmailOrPhone } from "@/controllers/validationLoginRegister";
import PrimaryButton from "@/components/ui/PrimaryButton/primaryButton";
import { useRouter } from 'next/navigation'
import { getCookie, setCookie } from "@/lib/cookies";

export default function InputDemo() {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter()
  const [role, setRole] = useState<string | null>(null);

    const handleValidationAndSubmit = () => {
      // Validasi email atau nomor HP
      const validation = validateEmailOrPhone(emailOrPhone);
      if (!validation.valid) {
        setErrorMessage("Masukkan email yang valid.");
      } else if(!username){
        setErrorMessage("Username tidak boleh kosong ");
      } else if (!role) {
        setErrorMessage("Pilih salah satu role Anda.");
      } else {
        // Simpan data role ke cookie
        setCookie("userRole", role, {
          path: "/",
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Cookie berlaku 7 hari
          sameSite: "Lax",
        });
      
        // Arahkan ke halaman berikutnya
        router.push(`/OwnerViewPage/registerStep2Page`);
      }
    };

    const handleRoleChange = (selectedRole: string) => {
      setRole(selectedRole); // Perbarui state role
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
            Email
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
          <Checkbox 
          // id="terms2" 
          id="role-owner"
          checked={role === "owner"}
          onCheckedChange={() => handleRoleChange("owner")}
          />
          <label
            htmlFor="role-owner"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pemilik
          </label>

          <Checkbox 
          // id="terms2" 
          id="role-operator"
          checked={role === "operator"}
          onCheckedChange={() => handleRoleChange("operator")}
          />
          <label
            // htmlFor="role-operator"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Karyawan
          </label>
        </div>

      </form>

      {/* Submit Button */}
      <div className="button-register">


          <PrimaryButton
          label="Lanjut"
          width={221}
          onClick={handleValidationAndSubmit}
          />

        </div>
  
    </div>
  </div>  
  );
}
