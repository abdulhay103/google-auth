import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className=" w-full shadow bg-white">
      <nav className="container mx-auto flex justify-between py-4">
        <div>
          <Link href="/">Home</Link>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
