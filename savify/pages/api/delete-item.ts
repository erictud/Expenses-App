import { deleteDoc, doc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(422).json({ message: "Access denied" });
    return;
  }
  const { id, type, uid } = req.body;
  const ref = doc(db, "users", uid, type, id);
  await deleteDoc(ref);
  res.status(200).json({ message: "Success" });
}
