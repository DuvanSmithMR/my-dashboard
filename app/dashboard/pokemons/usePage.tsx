const getPokemons = async (limit = 10, offset = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data;
};

export const usePage = async () => {
  const pokemons = await getPokemons();
  return {
    pokemons,
  };
};