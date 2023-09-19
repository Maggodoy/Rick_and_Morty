import Card from '../card/Card';
import style from './Cards.module.css';

export default function Cards({character, onClose}) {

    return ( 
        <div className={style.body}>
         <div className={style.cardList}>
          {character?.map(({id, name, status, species, gender, origin, image}) => {
              return (
            <Card 
            // key= {index} 
            // character={character}
            // onClose={onClose}
            key= {id}
            id= {id}
            name= {name}
            status= {status}
            gender= {gender}
            species= {species}
            image= {image}
            origin={origin.name}
            onClose= {onClose}
            />
             ) })}
         </div>
         </div>
         );
         
}
