"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const Logout = async () => {
    const config = { method: "GET" };
    const res = await fetch("/api/logout", config);
    try {
      let json = await res.json();
      if (json["status"] === true) {
        alert(json["msg"]);
        router.replace("/");
        window.location.reload();
      }
    } catch (error) {
      alert(error.toString());
    }
  };

  return (
    <div>
      <h1 className="text-center">Dashboard</h1>
      <div>
        <button onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}
