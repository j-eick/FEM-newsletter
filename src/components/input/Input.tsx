import { useEffect, useRef, useState } from "react";
import "../../App.css";
import Button from "../button";

export default function Input() {
  const [input, setInput] = useState<string>("");
  const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(Boolean);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const buttonHandler = (): void => {
    const checkInput = /^[a-zA-Z0-9.]{1,25}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,5}$/;

    if (checkInput.test(input)) {
      console.log("valid input");

      setIsEmailInvalid(false);
    } else {
      console.log("invalid input");
      setIsEmailInvalid(true);
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {}, [input]);

  return (
    <>
      <div className="labelContainer">
        <label className="label " htmlFor="input">
          Email address
        </label>
        {isEmailInvalid && <p className="errorMessage">Valid email required</p>}
      </div>
      <input
        id="input"
        type="email"
        ref={inputRef}
        className={`input ${!isEmailInvalid ? "" : "inputError"}`}
        placeholder="email@company.com"
        value={input}
        onChange={handleOnChange}
        autoFocus
        required
      />
      <Button type="button" onClick={buttonHandler}>
        Subscribe to monthly newsletter
      </Button>
    </>
  );
}
