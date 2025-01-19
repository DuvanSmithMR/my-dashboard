import Image from "next/image";
import { usePage } from "./usePage";

export default async function PokemosPage() {
  const { pokemons } = await usePage();
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons &&
          pokemons.map((pokemon) => (
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
          ))}
      </div>
    </div>
  );
}