import styled from "styled-components";
import {PokeCharacter} from "../interfaces/PokeCharacter";

const PokeDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    
    background-color: lightgray;
`;

export default function PokeList(){

    return(
        <PokeDiv>
            
        </PokeDiv>
    );
}