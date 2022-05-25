import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart);
  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", user);
    if (res.data.userToken.role.name === "Administrador") {
      dispatch(loginSuccess(res.data.userToken));
    }
  } catch (error) {
    dispatch(loginFailure);
  }
};

export const logout = (dispatch) => {
  dispatch(logoutStart);
  localStorage.removeItem("user");
};
