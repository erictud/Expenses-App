import { signInWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../firebase";

type Data = {
  message: string;
  uid?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Access denied" });
    return;
  }
  const { email, password } = req.body;
  if (email && !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }
  if (password && password.trim().length < 8) {
    res.status(422).json({ message: "Invalid password" });
    return;
  }
  const request = await signInWithEmailAndPassword(auth, email, password);
  if (!request) {
    res.status(422).json({ message: "Error loging in" });
    return;
  }
  res.status(200).json({ message: "Signed up succesfully", uid: request.user.uid });
}
