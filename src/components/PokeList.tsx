import styled from "styled-components";
import {PokeCharacter} from "../interfaces/PokeCharacter";
import IndividualPokemon from "./IndividualPokemon";


const PokeDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: lightgray;
`;

export default function PokeList({ data }: { data: PokeCharacter[] }){

    return(
        <PokeDiv>
            {
                // Map over the Pokemon data array and render a SinglePokemon component for each entry
                data.map((pokemon: PokeCharacter) =>
                    <IndividualPokemon
                        url={pokemon.url}
                        name={pokemon.name}
                       
                    />
                )
            }
        </PokeDiv>
    );
}
