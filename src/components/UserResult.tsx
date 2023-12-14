import { useSelector } from "react-redux";
import { regex } from "../util/regex";
import { selectResult, selectResultUser } from "../reducer/userReducer";
import { useEffect } from "react";

const UserResult = () => {
  const result = useSelector(selectResult);
  const userResult = useSelector(selectResultUser);
  useEffect(() => {}, [result]);

  const { passwordRegex } = regex();

  return result.result
    ? userResult.map((user, i) => {
        return (
          <div className="bg-[#BFBFBF] flex justify-start w-1/2" key={i}>
            <div className="font-semibold mr-3">Name : {user?.id}</div>
            <div className="font-semibold">
              Password :
              {user.password.length > 3 ? passwordRegex(user.password) : ""}
            </div>
          </div>
        );
      })
    : null;
};

export default UserResult;
