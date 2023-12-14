import { useDispatch } from "react-redux";
import { deleteUser } from "../../reducer/userReducer";

const DeleteButton = ({ uuid }: { uuid: string }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(deleteUser({ uuid }));
      }}
      className="w-[17px] h-[17px] font-semibold border border-black flex justify-center items-center p-2"
    >
      X
    </button>
  );
};

export default DeleteButton;
