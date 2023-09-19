import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions";

let initialState = {
   myFavorites : [],
   allCharacters: []
} 

 const reducer = (state = initialState, action) => {
   switch( action.type ){
      case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allCharacters: [...state.myFavorites, action.payload]
        }

      case REMOVE_FAV:
        return{
            ...state,
            myFavorites: state.myFavorites.filter(character => character.id !== Number(action.payload)),
            allCharacters: state.myFavorites.filter(character => character.id !== Number(action.payload))
      }

      case FILTER:
        const copy= [...state.allCharacters]
        const allCharactersFiltered = action.payload === 'all' ? copy: copy.filter(character => character.gender === action.payload)
        return{
           ...state, 
           myFavorites: [...allCharactersFiltered]
        }

      case ORDER: 
         if(action.payload === 'A')
         {const allCharactersFavCopy = [...state.allCharacters]
        const result = allCharactersFavCopy.sort((a,b)=> a.id - b.id)
      return{
        ...state,
        myFavorites: [...result]
      }
    }
    if(action.payload === 'D')
     {const allCharactersFavCopy = [...state.allCharacters]
      const result = allCharactersFavCopy.sort((a,b)=> b.id - a.id)
     return{
      ...state,
      myFavorites: [...result]
     }
    }
    

      default:
        return {...state};
   }
}
export default reducer;