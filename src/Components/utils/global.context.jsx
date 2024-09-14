import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

// Estado inicial
export const initialState = { 
  theme: "light", 
  doctors: [], 
  favs: JSON.parse(localStorage.getItem("favs")) || [], 
  nombre: "",
  correo: "",
  error: false,
  showCard: false
};

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

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });
  };

  const isAlreadyFav = (doctor) => {
    return state.favs.some((fav) => fav.id === doctor.id);
  };

  const toggleFav = (doctor) => {
    const isFav = isAlreadyFav(doctor);
    if (isFav) {
      dispatch({ type: "REMOVE_FAVS", payload: doctor });
      alert(`${doctor.name} ha sido removido de favoritos`);
    } else {
      dispatch({ type: "ADD_FAVS", payload: doctor });
      alert(`${doctor.name} ha sido agregado a favoritos`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FORM_FIELD", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nombreRegex = /^[a-zA-Z\s]+$/;

    if (
      state.nombre.trim().length > 5 &&
      nombreRegex.test(state.nombre) &&
      correoRegex.test(state.correo)
    ) {
      dispatch({ type: "SET_SHOW_CARD", payload: true });
      dispatch({ type: "SET_ERROR", payload: false });
    } else {
      dispatch({ type: "SET_ERROR", payload: true });
      dispatch({ type: "SET_SHOW_CARD", payload: false });
    }
  };

  const reset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const getThemeClass = () => {
    return state.theme === "dark" ? "dark" : "light";
  };

  return (
    <ContextGlobal.Provider 
      value={{ 
        state, 
        dispatch, 
        toggleTheme, 
        toggleFav, 
        isAlreadyFav, 
        getThemeClass,
        handleInputChange,
        handleSubmit,
        reset
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
