"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import AddItemForm from "../../components/add-item-page/AddItemForm";
import LoadingModal from "../../components/layout/loading-modal";
import { authState } from "../../data/authState";
import { loadingModalState } from "../../data/loadingModalState";

export default function AddItemPage() {
  const router = useRouter();
  const [uid, _] = useRecoilState(authState);
  const [loadingState, __] = useRecoilState(loadingModalState);

  useEffect(() => {
    if (!uid) {
      router.push("/auth");
      return;
    }
  }, [uid, router]);

  return (
    <div>
      {uid && (
        <>
          <AddItemForm />
          {loadingState && <LoadingModal value="Adding the item" />}
        </>
      )}
    </div>
  );
}
