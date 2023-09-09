"use client";
import { useRouter } from "next/navigation";

export const page = () => {
  const router = useRouter();
  const googleAuth = async () => {
    const config = { method: "GET" };
    const res = await fetch("api/login", config);

    if (res[status] === true) {
    } else {
      alert(res["msg"]);
    }
  };
  return (
    <div>
      <button>Login With Google</button>
    </div>
  );
};
