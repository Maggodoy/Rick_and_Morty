import {
  ADD_TO_FAVORITES,
  FILTER,
  REMOVE_FAVORITE,
  SORT,
  RESET,
} from "../redux/action-types";

let initialState = {allCharacters: [], favorites: []};

function rootReducer(state = initialState, action) {
  let sorted;
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
        allCharacters: action.payload,
      };

    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case SORT:
      if (action.payload === "Ascendente") {
        sorted = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        sorted = state.favorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }

      return {
        ...state,
        favorites: [...sorted],
      };

    case RESET:
      return {
        ...state,
        favorites: state.allCharacters,
      };

    default:
      return state;
  }
}

export default rootReducer;