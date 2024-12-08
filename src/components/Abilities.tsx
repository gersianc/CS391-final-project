// Amy (Ah Hyun) Wi
import styled from "styled-components";
import useSWR from "swr";

// Styled container for the list of abilities
const AbilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 2%;
    margin: 2%;
    background-color: #f9f9f9; 
    border: 1px black solid;
    border-radius: 2%;
    text-wrap: balance;
`;

// Styled card for individual ability details
const AbilityCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2%;
    padding: 3%;
    border: 1px solid black;
    border-radius: 2%;
    background-color: #fff;
    box-shadow: 0 2% 4% rgba(0, 0, 0, 0.1);
    width: 80%;
`;

// Fetcher function for useSWR to fetch data from the API
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

// Main component to display list of abilities
const Abilities = ({abilities}: {abilities: {ability: {name: string; url: string}}[]}) => {
    return (
        <AbilityContainer>
            <h2>Abilities</h2>
            {abilities.map(({ability}) => (
                // Each ability is fetched and rendered using AbilityItem
                <AbilityItem key={ability.name} abilityUrl={ability.url} />
            ))}
        </AbilityContainer>
    );
};

// Component to fetch and display details of a single ability
const AbilityItem = ({abilityUrl}: {abilityUrl: string}) => {

    // Fetch ability details using useSWR
    const {data, error} = useSWR(abilityUrl, fetcher);

    // Error handling during API fetch
    if (error) return <p>Error loading ability</p>;

    // Display loading message while data is being fetched
    if (!data) return <p>Loading...</p>;

    // Extracting relevant data from the fetched ability details
    const {name, effect_entries} = data;
    const shortEffect=
        effect_entries.find((entry: any) =>
            entry.language.name === "en")?.short_effect || "No description available.";

    // Rendering the ability details as a card
    return (
        <AbilityCard>
            <h3>{name}</h3>
            <p>{shortEffect}</p>
        </AbilityCard>
    );
}

export default Abilities;