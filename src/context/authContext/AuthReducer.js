const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default AuthReducer;