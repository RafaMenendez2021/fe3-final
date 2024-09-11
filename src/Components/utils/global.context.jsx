import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const initialState = { theme: "", doctors: [], favs: [] };

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, doctors: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVS":
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload) };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      throw new Error("Acción no existente");
  }
};


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, url }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}
