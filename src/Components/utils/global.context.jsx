import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const initialState = { theme: "light", doctors: [], favs: [] };

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
