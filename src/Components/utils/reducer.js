export const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: action.payload,
        };
      case "GET_DOCTORS":
        return {
          ...state,
          doctors: action.payload,
        };
      case "ADD_FAVS":
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      case "REMOVE_FAVS":
        return {
          ...state,
          favs: state.favs.filter(fav => fav.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  