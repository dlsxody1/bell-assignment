import useInput from "../../hook/useInput";

const UserPasswordInput = () => {
  const { handleInputChange, inputValue } = useInput();
  return (
    <div>
      <input
        onChange={(e) => handleInputChange(e)}
        className={`w-[388px] h-[36px] border focus:outline-none  ${
          inputValue.length <= 6 && inputValue.length !== 0
            ? "border-red-500 bg-red-200"
            : ""
        }`}
        type="password"
        name="password"
      />
      {inputValue.length <= 6 && inputValue.length !== 0 ? (
        <label className="flex text-red-600  text-[10px]">
          비밀번호는 6글자 이상이어야 합니다!
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserPasswordInput;
