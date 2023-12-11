import UserIdInput from "./Input/UserIdInput";
import UserPasswordInput from "./Input/UserPasswordInput";
import { selectUsers } from "../reducer/userReducer";
import { useSelector } from "react-redux";

const UserForm = () => {
  const users = useSelector(selectUsers);

  return (
    users &&
    users.map(({ uuid }, index) => {
      return (
        <div key={uuid}>
          <div className="w-[415px] h-[175px] border border-black p-3 mt-3 mb-3 ">
            <div className="flex justify-between">
              <h1 className="font-bold">User - {index}</h1>
              <div className="w-[17px] h-[17px] font-semibold border border-black flex justify-center items-center p-2">
                X
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-left">Name</label>
              <UserIdInput />
              <label className="text-left">Password</label>
              <UserPasswordInput />
            </div>
          </div>
        </div>
      );
    })
  );
};

export default UserForm;
