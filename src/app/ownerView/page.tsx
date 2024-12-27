import Sidebar from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Selamat datang di aplikasi Peternakan Anda!</p>
      </div>
    </div>
  );
}