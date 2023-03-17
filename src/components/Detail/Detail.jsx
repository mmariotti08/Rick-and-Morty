import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

 const Detail = () => {
    
    const {detailId} = useParams();
    
    const[character,setcharacter]=useState({});

    useEffect(()=>{
        axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((Response)=>setcharacter(Response.data))
    },[])

    return(
        <div>
            {character.name ? (
                <>
                    <h1>{character.name}</h1>
                    <h2>Status:{character.status}</h2>
                    <h2>Specie:{character.species}</h2>
                    <h2>Gender:{character.gender}</h2>
                    <h2>Origin:{character.origin?.name}</h2>
                    <img src={character.image} alt="img" />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )

 }


 export default Detail