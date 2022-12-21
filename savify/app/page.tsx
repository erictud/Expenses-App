"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Container from "../components/dashboard-page/dashboard-container";
import { authState } from "../data/authState";

export default function Home() {
  const router = useRouter();
  const [uid, _] = useRecoilState(authState);

  useEffect(() => {
    if (uid === "null") {
      router.push("/auth");
      return;
    }
  }, [uid, router]);

  return (
    <main>
      {uid !== "null" && (
        <>
          <Container />
        </>
      )}
    </main>
  );
}
