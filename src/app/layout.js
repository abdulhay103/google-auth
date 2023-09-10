import { Header } from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Authentication",
  description: "Work with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50">
        <Header />
        <div className="container mx-auto py-10">{children}</div>
      </body>
    </html>
  );
}
