import { usePage } from "./usePage";

export default async function PokemosPage() {
  const {pokemons} = await usePage();
  return <div>{JSON.stringify(pokemons)}</div>;
}