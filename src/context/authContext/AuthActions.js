export const loginStaRt = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});