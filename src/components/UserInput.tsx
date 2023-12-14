import { useDispatch, useSelector } from "react-redux";
import { IUserProps } from "../types/UserTypes";
import useInput from "../hook/useInput";
import { selectUsers, updateUser } from "../reducer/userReducer";
import { useEffect, useState } from "react";
import conditionCheck from "../util/conditionCheck";

const UserInput = ({
  initialValue,
  type,
}: {
  initialValue: IUserProps;
  type: "text" | "password";
}) => {
  const [isDuplicate, setIsDuplicate] = useState(true);
  const [lengthCheck, setIsLengthCheck] = useState(false);
  const { handleInputChange, inputValue } = useInput(initialValue);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const { hasDuplicateId } = conditionCheck(users);
  const focusPasswordLengthCheck = () => {
    setIsLengthCheck(true);
  };
  const blurPasswordLengthCheck = () => {
    setIsLengthCheck(false);
  };

  useEffect(() => {
    setIsDuplicate(hasDuplicateId());
  }, [inputValue.id, users]);

  return (
    <div>
      <input
        onChange={(e) => {
          handleInputChange(e);
          type === "text"
            ? dispatch(updateUser({ ...initialValue, id: e.target.value }))
            : dispatch(
                updateUser({ ...initialValue, password: e.target.value })
              );
        }}
        onFocus={() => focusPasswordLengthCheck()}
        onBlur={() => blurPasswordLengthCheck()}
        className={`w-[388px] h-[36px] border focus:outline-none  ${
          type === "text"
            ? inputValue.id.length <= 3 && inputValue.id.length !== 0
              ? "border-red-500 bg-red-200"
              : ""
            : inputValue.password.length <= 5 &&
              inputValue.password.length !== 0
            ? "border-red-500 bg-red-200"
            : ""
        }`}
        type={type}
        name={type === "text" ? "id" : "password"}
      />
      {type === "text" && isDuplicate ? (
        <label className="flex text-red-600 text-[10px]">
          The name "{inputValue.id}" is duplicated
        </label>
      ) : inputValue.id.length <= 3 && inputValue.id.length !== 0 ? (
        <label className="flex text-red-600 ">
          Name must be at least 3 character
        </label>
      ) : type === "password" &&
        lengthCheck &&
        inputValue.password.length === 0 ? (
        <label className="flex text-red-600 text-[10px]">
          Password is required
        </label>
      ) : inputValue.password.length <= 5 &&
        inputValue.password.length !== 0 ? (
        <label className="flex text-red-600 text-[10px]">
          Password must be at least 6 character
        </label>
      ) : null}
    </div>
  );
};

export default UserInput;
