"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
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
      <button
        className="py-2 px-5 bg-sky-300 text-white rounded"
        onClick={() => {
          signIn("github");
        }}
      >
        Login With Github
      </button>
    </div>
  );
}
