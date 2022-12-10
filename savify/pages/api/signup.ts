import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
type Data = {
  message: string;
};

type ReqData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Access denied" });
    return;
  }
  const { email, password, firstName, lastName } = req.body;
  const request = await createUserWithEmailAndPassword(auth, email, password);
  const uid = request.user.uid;
  const docRef = doc(db, "users", uid);
  const document = await setDoc(docRef, {
    lastName,
    firstName,
    uid,
  });
  res.status(200).json({ message: "Access granted" });
}
