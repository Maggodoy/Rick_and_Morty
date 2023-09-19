import { Link, useNavigate } from "react-router-dom";
import style from "./card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



function Card (props) {
  const navigate = useNavigate();
  const {character, onClose, addFav, removeFav, myFavorites} = props;

  function navigateHandler(){
    navigate(`/detail/${character.id}`);
  }

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (character) => {
      if(!isFav){
        addFav(character)
        setIsFav(true)
      }
      else {
        removeFav(character)
        setIsFav(false)
      }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  
  return (
      <div className={style.cardConteiner}>
        <div className={style.imageConteiner}>
             <button className= {style.closeButton} onClick={() => onClose(character.id)}>X</button>
             {isFav ?(
              <button  className={style.likeButton} onClick={() => handleFavorite(character.id)}>💜</button>
             ) : (
              <button  className={style.likeButton} onClick={() => handleFavorite(character)}>💚</button>
             )}
             
             
             <Link to={navigateHandler} >   
                  <h2>{character.name}</h2>
             </Link>
              
             <img  className={style.characterImage} src={character.image} alt={character.name} onClick={navigateHandler}/>
        
         

             <div className={style.atributes}>
               <h2>{character.species}</h2>
               <h2>{character.gender}</h2>
               <h2>{character.origin.name}</h2>
             </div>  
        </div> 
     </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites : state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
       addFav: (character) => dispatch(addFav(character)),
       removeFav: (id) => dispatch(removeFav(id)),
    };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);