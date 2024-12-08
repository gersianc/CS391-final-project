import styled from "styled-components";
import useSWR from "swr";
import Abilities from "./Abilities.tsx";
import { PokeCharacter } from "../interfaces/PokeCharacter";

const IndividualPokeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    padding: 2.5%;
    margin: 4.75%;
    background-color: white; 
    color: black; 
    border: 1px black solid;
    border-radius: 1%;
    text-wrap: balance;
    text-align: center;
`;

// Styled component for the Pokemon images, setting layout and sizing of the images
const PokeImages = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1%;
    img{
        margin: 0 2%;
        width: 80%;
        height: auto;
    }
`;

// fetcher function
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

// main component to render an individual Pokemon
export default function IndividualPokemon({name, url}:PokeCharacter){
    // extracting Pokemon ID from the URL
    const result = url.match(/pokemon\/(\d+)\//)?.[1];

    // fetch Pokemon details using useSWR
    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/${result}/`, fetcher);

    // error handling
    if (error) return <h3>Error loading Pokemon details</h3>;
    // display loading message
    if (!data) return <h3>Loading...</h3>;

    // render Pokemon details
    return(
        <IndividualPokeDiv>
            <PokeImages>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result}.png`}/>
            </PokeImages>
            <h1>{name}</h1>
            <Abilities abilities={data.abilities}/>
            
        </IndividualPokeDiv>
    );
}