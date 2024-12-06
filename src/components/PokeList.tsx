import styled from "styled-components";
import {PokeCharacter} from "../interfaces/PokeCharacter";
import IndividualPokemon from "./IndividualPokemon";
import { useEffect } from "react";

const PokeDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightgray;
`;

export default function PokeList({ data }: { data: PokeCharacter[] }){

    useEffect(()=>{
        async fetchData(`https://pokeapi.co/api/v2/pokemon/${dat}/`)

    }, []);
    
    return(
        <PokeDiv>
            
                // Map over the Pokemon data array and render a SinglePokemon component for each entry
                data.map((pokemon: PokeCharacter) =>
                    <IndividualPokemon
                        key={pokemon.url}
  
                        name={pokemon.name}
                        base_experience={pokemon.base_experience}
                        species={pokemon.species}
                        past_types={pokemon.past_types}
                        sprites={pokemon.sprites}
                    />
                )
            }
        </PokeDiv>
    );
}