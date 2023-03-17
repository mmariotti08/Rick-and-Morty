import Card from '../Card/Card.jsx';
import style from'./Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.container}>
      {
         characters.map((char)=>{
            return <Card
            
            name={char.name}
            species= {char.species}
            gender = {char.gender}
            image = {char.image}
            onClose = {props.onClose}
            id = {char.id}
            

            />
            
         })
      }
    
   </div>;
}
