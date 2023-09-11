"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChangeHandler = (name, value) => {
    setInputsValue({ ...inputsValue, [name]: value });
  };
  const emailAuth = async (e) => {
    e.preventDefault();
    if (inputsValue.email.length === 0) {
      alert("Email Required");
    } else if (inputsValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(inputsValue) };
      const res = await fetch("api/login", config);
      const json = await res.json();

      if (json[status] === true) {
        router.replace("/dashboard");
      } else {
        alert(json["msg"]);
      }
    }
  };
  return (
    <div className=" w-1/3 mx-auto p-6 bg-blue-50 border rounded">
      <h2 className="text-center text-lg font-bold text-sky-600 pb-3">
        Dashboard Login
      </h2>
      <form className="" onSubmit={emailAuth}>
        <div className=" w-full">
          <label className=" text-slate-500">Email</label>
          <input
            onChange={(e) => {
              onChangeHandler("email", e.target.value);
            }}
            className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
            value={inputsValue.email}
            type="email"
            placeholder="Your Email..."
          />
        </div>
        <div className=" w-full mt-3">
          <label className=" text-slate-500">Password</label>
          <input
            onChange={(e) => {
              onChangeHandler("password", e.target.value);
            }}
            className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
            value={inputsValue.password}
            type="password"
            placeholder="Your Password..."
          />
        </div>
        <div className="my-5">
          <button className="py-2 px-6 bg-white hover:bg-sky-400 border rounded mx-auto block text-sky-500 hover:text-white font-semibold">
            Login
          </button>
        </div>
      </form>
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
