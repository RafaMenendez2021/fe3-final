export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
    case "GET_DOCTORS":
      return { ...state, doctors: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVS":
      return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
    case "SET_FORM_FIELD":
      return { ...state, [action.payload.name]: action.payload.value };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SHOW_CARD":
      return { ...state, showCard: action.payload };
    case "RESET_FORM":
      return {
        ...state,
        nombre: "",
        correo: "",
        error: false,
        showCard: false
      };
    default:
      return state;
  }
};
