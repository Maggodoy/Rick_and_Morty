import {
  ADD_TO_FAVORITES,
  FILTER,
  REMOVE_FAVORITE,
  SORT,
  RESET,
} from "../redux/action-types";

const initialState = {
  allCharacters: [], // Siempre mantiene la lista original intacta
  favorites: []      // Lista que se modifica (filtra/ordena)
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAVORITE:
      // Filtramos directamente aquí para simplificar
      const updatedFavorites = state.allCharacters.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        favorites: updatedFavorites,
        allCharacters: updatedFavorites,
      };

    case FILTER:
      // Filtramos sobre la copia original (allCharacters)
      return {
        ...state,
        favorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case SORT:
      // Creamos una copia con [...] antes de ordenar para no mutar el estado
      const sorted = [...state.favorites].sort((a, b) => {
        return action.payload === "Ascendente" 
          ? a.id - b.id 
          : b.id - a.id;
      });

      return {
        ...state,
        favorites: sorted,
      };

    case RESET:
      return {
        ...state,
        favorites: [...state.allCharacters], // Devolvemos la lista original
      };

    default:
      return state;
  }
}

export default rootReducer;