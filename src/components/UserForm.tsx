// import UserIdInput from "./Input/UserIdInput";
// import UserPasswordInput from "./Input/UserPasswordInput";
import { selectUsers } from "../reducer/userReducer";
import { useSelector } from "react-redux";
import UserInput from "./UserInput";

const UserForm = () => {
  const users = useSelector(selectUsers);
  return (
    users.length > 0 &&
    users.map((user, index) => {
      return (
        <div key={user.uuid}>
          <div className="w-[415px] h-[175px] border border-black p-3 mt-3 mb-3 ">
            <div className="flex justify-between">
              <h1 className="font-bold">User - {index}</h1>
              <div className="w-[17px] h-[17px] font-semibold border border-black flex justify-center items-center p-2">
                X
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-left">Name</label>
              <UserInput type="text" initialValue={user} />
              <label className="text-left">Password</label>
              <UserInput type="password" initialValue={user} />
            </div>
          </div>
        </div>
      );
    })
  );
};

export default UserForm;
