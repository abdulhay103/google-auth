import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <header className=" w-full shadow bg-white">
      <nav className="container mx-auto flex justify-between py-4">
        <div>
          <Link href="/">Home</Link>
        </div>
        {session ? (
          <ul className="flex gap-6">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-6">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
