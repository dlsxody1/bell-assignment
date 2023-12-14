import { IUserProps } from "../types/UserTypes";

const conditionCheck = (userArray: IUserProps[]) => {
  //user의 id와 password가 모두 id 3글자, password 6글자 이상인지 체크하는 로직
  const confirmCheck = () => {
    const userInfoLengthCheck = userArray.every((user) => {
      return user.id.length >= 3 && user.password.length >= 6;
    });
    return userInfoLengthCheck;
  };

  //중복 체크하는 로직
  //user 배열의 원소가 1개만 존재할 때 false
  //user 배열의 원소중에 중복된 값이 있다면 true return
  const hasDuplicateId = (): boolean => {
    const idSet = new Set<string>();
    if (userArray.length === 1) return false;
    for (const user of userArray) {
      if (idSet.has(user.id)) {
        return true;
      }
      idSet.add(user.id);
    }
    return false;
  };

  return { confirmCheck, hasDuplicateId };
};

export default conditionCheck;
