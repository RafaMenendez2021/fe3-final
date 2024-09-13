import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

// Cargar favoritos de localStorage
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

// Estado inicial
export const initialState = { theme: "light", doctors: [], favs: lsFavs };

// Crear el contexto
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, []);

  // Actualizar localStorage cuando cambien los favoritos
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    console.log("Toggling theme to:", newTheme);
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
  };
  

  // Verificar si un doctor ya está en favoritos
  const isAlreadyFav = (doctor) => {
    return state.favs.some((fav) => fav.id === doctor.id);
  };

  // Función para alternar favoritos
  const toggleFav = (doctor) => {
    const isFav = isAlreadyFav(doctor);
    if (isFav) {
      dispatch({ type: "REMOVE_FAVS", payload: doctor });
    } else {
      dispatch({ type: "ADD_FAVS", payload: doctor });
    }
  };

  // Obtener la clase de tema actual
  const getThemeClass = () => {
    return state.theme === "dark" ? "dark" : "light";
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme, toggleFav, isAlreadyFav, getThemeClass }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
