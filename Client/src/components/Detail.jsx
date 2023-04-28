import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        // const URL_BASE = "https://be-a-rym.up.railway.app/api";
        // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

        axios(`http://localhost:3001/rickandmorty/character/${id}` /*`${URL_BASE}/character/${detailId}?key=${KEY}`*/).then((response) => 
        setCharacter(response.data)
        );

    }, [id]);

    return (
        <div>
            {character.name ? (
                <>
                <h3>{character.name}</h3>
                <h3>{character.status}</h3>
                <h3>{character.species}</h3>
                <h3>{character.gender}</h3>
                <h3>{character.origin?.name}</h3>
                <img src={character.image} alt="img" />
                </>
            ) : (
                <h1>Loading....</h1>
            )}
        </div>
    )
}

export default Detail;