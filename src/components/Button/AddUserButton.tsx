import { useDispatch } from "react-redux";
import { addUser } from "../../reducer/userReducer";
import uuid from "react-uuid";

const AddUserButton = () => {
  const dispatch = useDispatch();
  const clickAddUser = () => {
    const user = {
      id: "",
      password: "",
      uuid: uuid(),
    };
    dispatch(addUser(user));
  };
  return (
    <button
      onClick={clickAddUser}
      className="w-[90px] h-[30px] border border-2-black p-3 flex justify-center items-center text-xs font-semibold mr-[10px]"
    >
      Add User
    </button>
  );
};

export default AddUserButton;
