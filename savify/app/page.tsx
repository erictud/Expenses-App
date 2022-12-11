"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
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

  return <main>{uid && <div>wow</div>}</main>;
}
