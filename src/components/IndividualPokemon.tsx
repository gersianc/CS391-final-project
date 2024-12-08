// Stavros Constantinou
import styled from "styled-components";
import useSWR from "swr";
import Abilities from "./Abilities.tsx";
import { PokeCharacter } from "../interfaces/PokeCharacter";

// Styled container for the Pokemon card
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

// Fetcher function for API requests
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

// Main component to render an individual Pokemon
export default function IndividualPokemon({name, url}:PokeCharacter){

    // Extracting Pokemon ID from the URL
    const result = url.match(/pokemon\/(\d+)\//)?.[1];

    // Fetching Pokemon details using useSWR
    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/${result}/`, fetcher);

    // Error handling during API fetch
    if (error) return <h3>Error loading Pokemon details</h3>;

    // Display loading message
    if (!data) return <h3>Loading...</h3>;

    // Render Pokemon details, including name, image, and abilities
    return(
        <IndividualPokeDiv>
            {/*Pokemon Image*/}
            <PokeImages>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result}.png`}/>
            </PokeImages>

            {/*Pokemon Name*/}
            <h1>{name}</h1>

            {/*Abilities List*/}
            <Abilities abilities={data.abilities}/>
        </IndividualPokeDiv>
    );
}