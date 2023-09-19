import Cards from "../cards/Cards";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
        <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Desendente</option>
            </select>

            <select onChange={handleFilter}>
            <option value="all">ALL</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

        {
           myFavorites?.map(fav => {
                return(
                   <Cards characters={myFavorites}/>
                )
            })
        } 
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites : state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);