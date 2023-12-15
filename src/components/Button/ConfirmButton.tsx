import { useDispatch, useSelector } from "react-redux";
import { remainUser, resetUser, selectUsers } from "../../reducer/userReducer";
import { useEffect, useState } from "react";
import conditionCheck from "../../util/conditionCheck";
import { showResult } from "../../reducer/userReducer";

const ConfirmButton = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    const { confirmCheck, hasDuplicateId } = conditionCheck(users);
    setIsConfirm(confirmCheck() && !hasDuplicateId());
  }, [users]);

  return (
    <button
      disabled={!isConfirm}
      onClick={async () => {
        dispatch(showResult());
        dispatch(remainUser());
        dispatch(resetUser());
      }}
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
