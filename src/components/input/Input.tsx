import { useState } from "react";
import styles from "./Input.module.css";

export default function Input(initialValue: "") {
  const [input, setInput] = useState<string>(initialValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder="email@company.com"
      value={input}
      onChange={handleOnChange}
    />
  );
}
