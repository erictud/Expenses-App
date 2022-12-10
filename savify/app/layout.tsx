"use client";

import "./globals.css";
import NavBar from "../components/layout/navbar";
import { RecoilRoot } from "recoil";
import { usePathname } from "next/navigation";
import Providers from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          {pathname != "/auth" && <NavBar />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
