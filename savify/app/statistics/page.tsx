"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import YearsRow from "../../components/satistics-page/years-options-row";
import { authState } from "../../data/authState";

export default function StatisticsPage() {
  const [uid, _] = useRecoilState(authState);
  const router = useRouter();

  useEffect(() => {
    if (uid === "null") router.push("/auth");
  }, [uid, router]);

  return (
    uid !== "null" && (
      <div>
        <YearsRow />
      </div>
    )
  );
}
