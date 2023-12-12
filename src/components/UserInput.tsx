import { useDispatch, useSelector } from "react-redux";
import { IUserProps } from "../types/UserTypes";
import useInput from "../hook/useInput";
import { selectUsers, updateUser } from "../reducer/userReducer";
import { useEffect, useState } from "react";

const UserInput = ({
  initialValue,
  type,
}: {
  initialValue: IUserProps;
  type: "text" | "password";
}) => {
  const [isDuplicate, setIsDuplicate] = useState(true);
  const { handleInputChange, inputValue } = useInput(initialValue);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const hasDuplicateId = (userArray: IUserProps[]): boolean => {
    const idSet = new Set<string>();
    for (const user of userArray) {
      if (idSet.has(user.id)) {
        return true;
      }
      idSet.add(user.id);
    }
    return false;
  };

  useEffect(() => {
    setIsDuplicate(hasDuplicateId(users));
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
          console.log(users);
        }}
        className={`w-[388px] h-[36px] border focus:outline-none  ${
          type === "text"
            ? inputValue.id.length <= 3 && inputValue.id.length !== 0
              ? "border-red-500 bg-red-200"
              : ""
            : inputValue.password.length <= 6 &&
              inputValue.password.length !== 0
            ? "border-red-500 bg-red-200"
            : ""
        }`}
        type={type}
        name={type}
      />
      {type === "text" && isDuplicate ? (
        <label className="flex text-red-600 text-[10px]">
          ID가 중복되었습니다
        </label>
      ) : type === "text" &&
        inputValue.id.length <= 3 &&
        inputValue.id.length !== 0 ? (
        <label className="flex text-red-600">
          이름을 3글자 이상 입력해주세요
        </label>
      ) : type === "password" &&
        inputValue.password.length <= 6 &&
        inputValue.password.length !== 0 ? (
        <label className="flex text-red-600 text-[10px]">
          비밀번호는 6글자 이상이어야 합니다!
        </label>
      ) : null}
    </div>
  );
};

export default UserInput;
