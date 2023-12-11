import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue(value);
  };

  return { inputValue, setInputValue, handleInputChange };
};

export default useInput;
