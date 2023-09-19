import { Link, useNavigate } from "react-router-dom";
import style from "./card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect } from 'react';



function Card ({id, name, species, gender, image, status, onClose}) {
  const dispatch = useDispatch()
  const myFavorites = useSelector(state => state.myFavorites)
  const navigate = useNavigate();
  //const {character, onClose, addFav, removeFav} = props;

  function navigateHandler(){
    navigate(`/detail/${id}`);
  }
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
      if(!isFav){
       dispatch(addFav(removeFav(id)))
        setIsFav(true)
      }
      else {
        dispatch(removeFav(addFav({id, name, status, species, gender, image, onClose})))
        setIsFav(false)
      }
  }
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
      <div className={style.cardConteiner}>
        <div className={style.imageConteiner}>
             <button className= {style.closeButton} onClick={() => onClose(id)}>X</button>
             {isFav ?(
              <button  className={style.likeButton} onClick={() => handleFavorite()}>💜</button>
             ) : (
              <button  className={style.likeButton} onClick={() => handleFavorite()}>💚</button>
             )}
             
             
             <Link to={navigateHandler} >   
                  <h2>{name}</h2>
             </Link>
              
             <img  className={style.characterImage} src={image} alt={name} onClick={navigateHandler}/>
        
         

             <div className={style.atributes}>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin.name}</h2>
             </div>  
        </div> 
     </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites : state.myFavorites,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//        addFav: (character) => dispatch(addFav(character)),
//        removeFav: (id) => dispatch(removeFav(id)),
//     };
// };

export default Card;