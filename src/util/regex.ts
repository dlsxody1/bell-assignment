export const regex = () => {
  //password 3자리 이외에는 *로 수정
  const passwordRegex = (password: string) => {
    return password.slice(0, 3) + "*".repeat(password.length - 3);
  };

  return { passwordRegex };
};
