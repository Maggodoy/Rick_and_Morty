import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './card.module.css'; 
import { addFav, removeFav } from '../../redux/actions'; 

function Card({ id, name, species, gender, image, status, origin, onClose }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, status, species, gender, image, origin }));
    }
  };

  useEffect(() => {
    if (myFavorites && myFavorites.length > 0) {
      const isFavorite = myFavorites.some((fav) => fav.id === id);
      setIsFav(isFavorite);
    }
  }, [myFavorites, id]);

  return (
    <div className={style.cardConteiner}>
      {/* Botones de acción */}
      <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
      <button className={style.likeButton} onClick={handleFavorite}>
        {isFav ? '💜' : '💚'}
      </button>
    
      {/* Nombre */}
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>

      {/* Imagen centrada y responsiva */}
      <div className={style.imageWrapper}>
        <img 
          className={style.characterImage} 
          src={image} 
          alt={name} 
          onClick={() => navigate(`/detail/${id}`)}
        />
      </div>

      {/* Atributos compactos */}
      <div className={style.contentWrapper}>
        <div className={style.atributes}>
          <p><strong>Species:</strong> {species}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Origin:</strong> {origin?.name}</p>
        </div>   
      </div> 
    </div>
  );
}

export default Card;