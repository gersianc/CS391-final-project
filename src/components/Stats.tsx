// Gersian Collaku
import styled from "styled-components";

// container for the stats component
const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f8ff;
    border: 1px solid black;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    margin-top: 1rem;
`;

// wrapper for each individual statisitc as a whole
const StatWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    height: fit-content;
`;

// styling for the name of the stat
const StatLabel = styled.span`
    flex: 1;
    font-weight: bold;
    text-transform: capitalize;
    align-items: center;
`;

// styling for the bar of the stat/ the number for the stat
const StatBar = styled.div<{ width: number }>`
    height: 15px;
    flex: 3;
    background-color: forestgreen;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
`;

//stat property where basestat is the number and stat.name for the name of the given stat.
interface StatsProps {
    stats: { base_stat: number; stat: { name: string } }[];
}


//display the stats here and wrap them in the right style
function Stats({ stats }: StatsProps) {
    return (
        <StatsContainer>
            <h3>Stats</h3>
            {stats.map(({ base_stat, stat }) => (    //getting the stats
                <StatWrapper key={stat.name}>
                    <StatLabel>{stat.name}</StatLabel>
                    <StatBar width={(base_stat / 200) * 100}>{base_stat}</StatBar>
                    {/*tried making the stat bar not full here*/}
                </StatWrapper>
            ))}
        </StatsContainer>
    );
}

export default Stats;
