import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={style.contenedor}>
      <button onClick={()=>(props.onClose(props.id))} className={style.lax}>X</button>

      <Link to={`/detail/${props.id}`} >
      <h2>{props.name}</h2>
      </Link>
      
      <img src={props.image} alt="" className={style.img}/>
      <h2>Species:{props.species}</h2>
      <h2>Gender:{props.gender}</h2>
    </div>
  );
}
