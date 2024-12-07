import useSWR from 'swr';

const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());

export default function NewComponent({ pokes, index }) {
    const id = index + 1;
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}/`, fetcher);

    if (error) return <h3>Error</h3>;
    if (!data) return <h3>Loading ...</h3>;

    console.log("This is the data:", data);

    return (
        <div>
            <h3>{data.name}</h3>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    );
}