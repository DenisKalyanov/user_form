export const validatePassword = (password: string) => {
  if (4 < password.length && password.length < 10 && password.match(/[A-Z]/)) {
    return true;
  }
  return false;
};
