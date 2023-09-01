import Cards from "../cards/Cards";
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
    return (
        <>
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