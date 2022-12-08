"use client";

import "./globals.css";
import NavBar from "../components/layout/navbar";
import { RecoilRoot } from "recoil";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head />
      <body>
        <RecoilRoot>
          {pathname != "/auth" && <NavBar />}
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
