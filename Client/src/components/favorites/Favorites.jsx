// import {connect} from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { sortById, filterByGender, reset, removeFav } from "../../redux/actions";
import Card from "../card/Card";

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  function sortHandler(event) {
    dispatch(sortById(event.target.value));
  }

  function filterHandler(event) {
    dispatch(filterByGender(event.target.value));
  }

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div>
      {/* ... tus selects y botones ... */}
      <select onChange={filterHandler}>
        <option value="all">Gender</option> {/* Agregué una opción por defecto */}
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>{gender}</option>
        ))}
      </select>
      
      <select onChange={sortHandler}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      
      <button onClick={resetHandler}>RESET</button>

      {/* Mapeo de favoritos */}
      <div className="cards-container"> {/* Asumo que tienes un contenedor para las cards */}
        {myFavorites?.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            // AQUÍ LA CORRECCIÓN: pasamos la función que elimina el favorito
            onClose={() => dispatch(removeFav(fav.id))} 
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;