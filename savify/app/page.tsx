"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import ButtonsRow from "../components/dashboard-page/buttons-row";
import TransactionsList from "../components/dashboard-page/TransactionsList";
import { authState } from "../data/authState";

export default function Home() {
  const router = useRouter();
  const [uid, _] = useRecoilState(authState);

  useEffect(() => {
    if (!uid) {
      router.push("/auth");
      return;
    }
  }, [uid, router]);

  return (
    <main>
      {uid && (
        <>
          <ButtonsRow />
          <TransactionsList />
        </>
      )}
    </main>
  );
}
