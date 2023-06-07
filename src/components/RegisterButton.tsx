import { useState } from "react";
import RegisterForm from "./RegisterForm";
import RegisterNotification from "./RegisterNotification";

export default function RegisterButton() {
  const [isShown, setIsShown] = useState(false);
  const toggleRegisterForm = () => {
    setIsShown((isShown) => !isShown);
  };

  return (
    <>
      <button
        onClick={() => toggleRegisterForm()}
        className="bg-white text-md font-semibold text-slate-700 py-1 px-6 rounded-lg hover:scale-110 transition-transform"
      >
        Join Photo Club Membership
      </button>
      {isShown ? <RegisterForm setIsShown={setIsShown} /> : null}
      {/* <RegisterNotification /> */}
    </>
  );
}
