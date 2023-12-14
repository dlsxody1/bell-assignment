import { useSelector } from "react-redux";
import { regex } from "../util/regex";
import { selectResult, selectResultUser } from "../reducer/userReducer";

const UserResult = () => {
  const result = useSelector(selectResult);
  const userResult = useSelector(selectResultUser);
  const { passwordRegex } = regex();

  return result.result
    ? userResult.map((user, i) => {
        return (
          <div className="bg-[#BFBFBF] flex justify-start mt-3 mb-3" key={i}>
            <div className="font-semibold mr-3 flex">
              Name : <div className="font-normal">{user?.id}</div>
            </div>
            <div className="font-semibold mr-3 flex">
              Password :
              <div className="font-normal">
                {" "}
                {user.password.length > 3 ? passwordRegex(user.password) : ""}
              </div>
            </div>
          </div>
        );
      })
    : null;
};

export default UserResult;
