export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DOCTORS":
        return { ...state, doctors: action.payload };
      case "ADD_FAVS":
        return { ...state, favs: [...state.favs, action.payload] };
      case "REMOVE_FAVS":
        return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id) };
      case "TOGGLE_THEME":
        return { ...state};
      default:
        throw new Error("Acción no existente");
    }
  };