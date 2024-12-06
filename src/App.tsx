import useSWR from 'swr';
import styled from "styled-components";
import NewComponent from './components/NewComponent';
// import { PokeCharacter } from "./interfaces/PokeCharacter";
// import IndividualPokemon from "./IndividualPokemon";
// import PokeList from './components/PokeList';


const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;
`;

function App() {
    const {data, error} = useSWR("https://pokeapi.co/api/v2/pokemon?limit=3", (url)=>
      fetch(url).then(res=>res.json())  // Fetch data from the API and return as JSON
    );

    if (error) return <h1>Error: {error.message}</h1>;

    // If the data hasn't loaded yet, display a loading message
    if (!data) return <h1>Loading...</h1>;

    const pokemonList = data.results;
    console.log(pokemonList);
    return(
      
      <>
        {
                pokemonList.map((pokemon,i)=> 
                  {
                    <NewComponent
                        pokes={pokemon}
                        index={i}
                    />
                  }
                )

        }
      </>

    );
    // async function fetchData(){
    //   const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    //   const actualData = await rawData.json();
    //   if (actualData.status === 'success'){
    //     const info = Object.keys(actualData.message);

    //     const getInfo = info.map(
    //       async (info) =>{
    //         console.log(info);
    //         const rawInfo = await fetch(`pokemonList.url`);
    //         const actualInfo = await rawInfo.json();
            
    //       }
    //     )
    //   }
    // }

    
  
    
    
    // // Once data is loaded, render the PokemonList component, passing the fetched data
    // return (
    //     <ParentDiv>
    //       <PokeList data={pokemonList} />  {/* Pass the 'data.data' from the API response to PokemonList */}
    //     </ParentDiv>
    // );
}

export default App
