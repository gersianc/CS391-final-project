export interface PokeCharacter {
    id: string;
    name: string;
    base_experience: string;
    moves: {
        move: {
          name: string;
          url: string;
        };
    }[];
    species: {
        name: string;
    };
    past_types: {
        generation: {
            name: string;
            url: string;
        };
    }[];
}