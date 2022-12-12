"use client";

import { useState } from "react";
import ChangeButtonsRow from "./ChangeButtonsRow";
import LoginForm from "./Login/LoginForm";
import SigninForm from "./Signup/SignupForm";

export default function FormsAuth() {
  const [value, setValue] = useState(true);

  const updateState = () => {
    setValue((prevVal) => !prevVal);
  };
  return (
    <div>
      <ChangeButtonsRow value={value} updateState={updateState} />
      {value ? <LoginForm /> : <SigninForm />}
    </div>
  );
}
