import styled from "styled-components";
import {PokeCharacter} from "../interfaces/PokeCharacter";
import IndividualPokemon from "./IndividualPokemon";

const PokeDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    
    background-color: lightgray;
`;

export default function PokeList(){

    return(
        <PokeDiv>
            {
                // Map over the Pokemon data array and render a SinglePokemon component for each entry
                data.map((pokemon: PokeCharacter) =>
                    <IndividualPokemon
                        key={pokemon.id}
                        id={pokemon.id}
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