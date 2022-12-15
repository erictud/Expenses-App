import { addDoc, doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../firebase";

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(422).json({ message: "Access denied!" });
    return;
  }
  const { aqusitionName, aqusitionAmount, uid, typeOfAqusition } = req.body;
  const ref = doc(db, "users", uid, typeOfAqusition, new Date().toString());
  await setDoc(ref, {
    name: aqusitionName,
    amount: aqusitionAmount,
    date: new Date().toString(),
  });
  res.status(200).json({ message: "Sent successfully" });
}
