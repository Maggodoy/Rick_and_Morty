import React from 'react';
import Card from '../card/Card'; // Importación correcta (sube un nivel, entra en card)
import style from './Cards.module.css';


export default function Cards({ characters, onClose }) { 
    return ( 
        <div className={style.body}>
           <div className={style.cardList}>
            
            {characters?.map((char) => (
                <Card 
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    gender={char.gender}
                    origin={char.origin} 
                    image={char.image}
                    onClose={onClose}
                />
            ))}
           </div>
        </div>
    );
}