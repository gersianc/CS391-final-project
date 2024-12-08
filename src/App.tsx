import useSWR from 'swr';
import styled from "styled-components";
import PokeList from './components/PokeList';

// Styled container for main layout
const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;
`;

function App() {
    // Fetch the list of Pokemon from the API
    const {data, error} = useSWR("https://pokeapi.co/api/v2/pokemon", (url)=>
      fetch(url).then(res=>res.json())  // Fetch data from the API and return as JSON
    );

    // Handler errors during API fetch
    if (error) return <h1>Error: {error.message}</h1>;

    // If the data hasn't loaded yet, display a loading message
    if (!data) return <h1>Loading...</h1>;

    // Extracting Pokemon list from fetched data
    const pokemonList = data.results;

    // Once data is loaded, render the PokeList component, passing the fetched data
     return (
         <ParentDiv>
           <PokeList data={pokemonList} />  {/* Pass the 'data.data' from the API response to PokemonList */}
         </ParentDiv>
     );
}

export default App;
