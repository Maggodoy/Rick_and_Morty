import Card from '../card/Card';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
 console.log(characters)
    return (
         <div className={style.cardList}>
          {characters?.map((character, index) => (
            <Card 
             key= {index} 
             character={character}
             onClose={onClose}
            />
          ))}
         </div>
         );
}