"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import AddItemForm from "../../components/add-item-page/AddItemForm";
import Spinner from "../../components/layout/spinner";
import { authState } from "../../data/authState";

export default function AddItemPage() {
  const router = useRouter();
  const [uid, _] = useRecoilState(authState);

  useEffect(() => {
    if (!uid) {
      router.push("/auth");
      return;
    }
  }, [uid, router]);

  return <div>{uid && <AddItemForm />}</div>;
}
