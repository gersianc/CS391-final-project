export interface PokeCharacter {
    id: string;
    name: string;
    base_experience: string;
    species: {
        name: string;
    };
    past_types: {
        generation: {
            name: string;
            url: string;
        };
    }[];
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
    };
}