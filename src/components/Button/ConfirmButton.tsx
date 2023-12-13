import { useSelector } from "react-redux";
import { selectUsers } from "../../reducer/userReducer";
import { useEffect, useState } from "react";
import conditionCheck from "../../util/conditionCheck";

const ConfirmButton = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const users = useSelector(selectUsers);

  useEffect(() => {
    const { confirmCheck, hasDuplicateId } = conditionCheck(users);
    setIsConfirm(confirmCheck() && !hasDuplicateId());
  }, [users.map((user) => user.uuid)]);

  return (
    <button
      className={`p-2 flex justify-center items-center text-xs border ${
        isConfirm
          ? "border-black text-black"
          : "bg-[#EFEFEF]  border-[#BBBBBB] text-[#C4C4C4]"
      }`}
    >
      Confirm
    </button>
  );
};

export default ConfirmButton;
