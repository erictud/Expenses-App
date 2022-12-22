"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Container from "../components/dashboard-page/dashboard-container";
import LoadingModal from "../components/layout/loading-modal";
import { authState } from "../data/authState";
import { loadingModalState } from "../data/loadingModalState";

export default function Home() {
  const router = useRouter();
  const [uid, _] = useRecoilState(authState);
  const [loadingState, __] = useRecoilState(loadingModalState);

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
          {loadingState && <LoadingModal value="Deleting item..." />}
        </>
      )}
    </main>
  );
}
