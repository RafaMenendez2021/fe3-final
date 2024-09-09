import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";

// Estado inicial
export const initialState = {
  theme: "",
  favs: [],
  doctors: [],
};

// Crear el contexto
const ContextGlobal = createContext(undefined);

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, doctors: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      throw new Error("Acción no existente");
  }
};

// Proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // URL de la API para obtener los doctores
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, [url]);

  // Usar useMemo para optimizar el valor del contexto
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useDoctorStates = () => {
  const context = useContext(ContextGlobal);

  if (!context) {
    throw new Error("useDoctorStates must be used within ContextProvider");
  }

  return context;
};
