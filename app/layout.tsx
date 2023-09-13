import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import ProfilePic from "./components/profilepic";


export const metadata: Metadata = {
  title: "Toye's blog",
  description: "Created by Toye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar/>
        <ProfilePic/>
        {children}
      </body>
    </html>
  );
}
