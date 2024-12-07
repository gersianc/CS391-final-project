import styled from "styled-components";
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
export default function IndividualPokemon({name, url}:PokeCharacter){
    
    const result = url.match(/pokemon\/(\d+)\//)?.[1];
    
    return(
        <IndividualPokeDiv>
            <PokeImages>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result}.png`}/>
            </PokeImages>
            <h1>{name}</h1>
            
        </IndividualPokeDiv>
    );
}