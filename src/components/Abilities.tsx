import styled from "styled-components";
import useSWR from "swr";

// container for the abilities list
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

// card for individual ability details
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

// fetcher function for useSWR handling API requests
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

// display list of abilities
const Abilities = ({abilities}: {abilities: {ability: {name: string; url: string}}[]}) => {
    return (
        <AbilityContainer>
            <h2>Abilities</h2>
            {abilities.map(({ability}) => (
                // each ability is fetched and rendered
                <AbilityItem key={ability.name} abilityUrl={ability.url} />
            ))}
        </AbilityContainer>
    );
};

// component to fetch and display details of a single ability
const AbilityItem = ({abilityUrl}: {abilityUrl: string}) => {
    const {data, error} = useSWR(abilityUrl, fetcher);

    // error handling
    if (error) return <p>Error loading ability</p>;

    // display loading message
    if (!data) return <p>Loading...</p>;

    // getting relevant data
    const {name, effect_entries} = data;
    const shortEffect=
        effect_entries.find((entry: any) =>
            entry.language.name === "en")?.short_effect || "No description available.";

    return (
        <AbilityCard>
            <h3>{name}</h3>
            <p>{shortEffect}</p>
        </AbilityCard>
    );
}

export default Abilities;