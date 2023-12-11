import useInput from "../../hook/useInput";

const UserIdInput = () => {
  const { handleInputChange, inputValue } = useInput();

  return (
    <div>
      <input
        onChange={(e) => handleInputChange(e)}
        className={`w-[388px] h-[36px] border focus:outline-none  ${
          inputValue.length <= 3 && inputValue.length !== 0
            ? "border-red-500 bg-red-200"
            : ""
        }`}
        type="text"
        name="id"
      />
      {inputValue.length <= 3 && inputValue.length !== 0 ? (
        <label className="flex text-red-600">
          이름을 3글자 이상 입력해주세요
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserIdInput;
