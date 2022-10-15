import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

const init = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  return {
    logged: !!data,
    data,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (user = "", password = "") => {
    const data = { user, password };

    localStorage.setItem("data", JSON.stringify(data));

    dispatch({
      type: types.login,
      payload: data,
    });
  };

  const logout = () => {
    localStorage.removeItem("data");
    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
