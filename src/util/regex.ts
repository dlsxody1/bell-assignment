export const regex = () => {
  const passwordRegex = (password: string) => {
    return password.slice(0, 3) + "*".repeat(password.length - 3);
  };

  return { passwordRegex };
};
