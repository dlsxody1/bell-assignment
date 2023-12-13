import { useSelector } from "react-redux";
import { regex } from "../util/regex";
import { selectResult, selectResultUser } from "../reducer/userReducer";

const UserResult = () => {
  const result = useSelector(selectResult);
  const userResult = useSelector(selectResultUser);
  console.log(result, "결과 렌더링");
  const { passwordRegex } = regex();

  return result.result
    ? userResult.map((user) => {
        return (
          <div
            className="bg-[#BFBFBF] flex justify-start w-1/2"
            key={user.uuid}
          >
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
