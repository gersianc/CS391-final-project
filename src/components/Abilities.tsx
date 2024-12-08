import styled from "styled-components";
import useSWR from "swr";

// container for the abilities list
const AbilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 2.5%;
    margin: 4.75%;
    background-color: white; 
    color: black; 
    border: 1px black solid;
    border-radius: 1%;
    text-wrap: balance;
`;

// card for individual ability details
const AbilityCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    padding: 5%;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
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