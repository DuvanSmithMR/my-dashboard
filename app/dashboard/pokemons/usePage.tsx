import { PokemonsResponse, SimplePokemon } from "./models";

const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const usePage = async () => {
  const pokemons = await getPokemons(100);
  return {
    pokemons,
  };
};