import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
type Data = {
  message: string;
  uid?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Access denied" });
    return;
  }
  const { email, password, firstName, lastName } = req.body;
  if (firstName && firstName.trim().length < 3) {
    res.status(422).json({ message: "Invalid first name" });
    return;
  }
  if (lastName && lastName.trim().length < 3) {
    res.status(422).json({ message: "Invalid last name" });
    return;
  }
  if (email && !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }
  if (password && password.trim().length < 8) {
    res.status(422).json({ message: "Invalid password" });
    return;
  }
  const request = await createUserWithEmailAndPassword(auth, email, password);
  const uid = request.user.uid;
  const docRef = doc(db, "users", uid);
  const document = await setDoc(docRef, {
    lastName,
    firstName,
    uid,
  });
  res.status(200).json({ message: "Signed up succesfully", uid });
}
