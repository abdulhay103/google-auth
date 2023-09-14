"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [inputsValue, setInputsValue] = useState({
    user: "",
    email: "",
    password: "",
  });

  // onChange Setup
  const onChangeHandler = (name, value) => {
    setInputsValue({ ...inputsValue, [name]: value });
  };

  // onSubmit Setup
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      method: "POST",
      body: JSON.stringify(inputsValue),
    };
    const res = await fetch("/api/register", config);
    const resData = await res.json();
    if (resData["status"] === true) {
      setLoading(false);
      alert(resData["msg"]);
      router.replace("/login");
      // window.location.reload();
    } else {
      setLoading(false);
      alert(resData["msg"]);
    }
  };
  return (
    <div className=" w-1/3 mx-auto p-6 bg-slate-50 border rounded">
      <h2 className="text-center text-lg font-bold text-sky-600 pb-3">
        User Resigtration
      </h2>
      <form className="" onSubmit={onSubmitHandler}>
        <div className=" w-full">
          <label className=" text-slate-500">User Name</label>
          <input
            className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
            onChange={(e) => {
              onChangeHandler("user", e.target.value);
            }}
            value={inputsValue.user}
            type="text"
            placeholder="User Name..."
          />
        </div>
        <div className=" w-full">
          <label className=" text-slate-500">Email</label>
          <input
            className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
            onChange={(e) => {
              onChangeHandler("email", e.target.value);
            }}
            value={inputsValue.email}
            type="email"
            placeholder="Your Email..."
          />
        </div>
        <div className=" w-full mt-3">
          <label className=" text-slate-500">Password</label>
          <input
            className="py-2 px-5 w-full my-2 rounded border text-sky-400 border-slate-400 focus:outline-none focus:ring-none focus:border-sky-400 placeholder:text-slate-400 focus:text-sky-400"
            onChange={(e) => {
              onChangeHandler("password", e.target.value);
            }}
            type="password"
            placeholder="Your Password..."
          />
        </div>
        <div className="my-5">
          <button
            className="py-2 px-6 bg-white hover:bg-sky-400 border rounded mx-auto block text-sky-500 hover:text-white font-semibold disabled:hover:bg-white disabled:hover:text-slate-300 disabled:text-slate-300"
            disabled={
              loading ||
              !inputsValue.user ||
              !inputsValue.email ||
              !inputsValue.password
            }
          >
            {loading ? "Please Wait.." : "Submit"}
          </button>
        </div>
      </form>

      <div className="text-center py-3">
        <p>
          I have already registerd!
          <Link className="text-sky-500 px-2" href="/login">
            Login here?
          </Link>
        </p>
      </div>
    </div>
  );
}
