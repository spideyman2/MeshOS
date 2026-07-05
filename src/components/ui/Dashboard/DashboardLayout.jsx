import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Navbar />

      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-10 lg:px-12">
          {children}
        </main>
      </div>
    </div>
  );
}
    