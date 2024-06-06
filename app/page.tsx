import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <Sidebar />
        <Login />
      </main>
      <div></div>
    </div>
  );
}
