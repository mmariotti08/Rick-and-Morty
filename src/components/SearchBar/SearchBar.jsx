import { useState } from "react";

export default function SearchBar(props) {
   const [characters, setCharacters] = useState("")
   const handleChange=(event)=>{
      setCharacters(event.target.value)
   }
   return (
      <div>
         <input type='search'onChange={handleChange} />
      <button onClick={()=>(props.onSearch(characters))}>Agregar</button>
      </div>
   );
}
