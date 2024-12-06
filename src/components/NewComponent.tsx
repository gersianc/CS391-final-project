import useSWR from 'swr';

export default function NewComponent({pokes,index}){
    
    const id =index+1;
    const {data, error} = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}/`, (url) => 
        fetch(url)
            .then(res => res.json())
        );

    if(error) return <h3>Error</h3>
    if (!data) return <h3>Loading ...</h3>

    return(
        <>
            {
                console.log("This is the data:" + data)
            }
        </>
    );

}