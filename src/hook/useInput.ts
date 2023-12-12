import { ChangeEvent, useState } from "react";
import { IUserProps } from "../types/UserTypes";

const useInput = (initialValue: IUserProps) => {
  const [inputValue, setInputValue] = useState<IUserProps>(initialValue);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return { inputValue, setInputValue, handleInputChange };
};

export default useInput;
