import React, {useState} from "react";
import { PokemonType } from "./PokemonType";

export function Pokedex() {

  const [selectedPokemon, setSelectedPokemon] = useState(undefined);


  //async means run at same time as rest of code
  async function getPokemonInfo(name) {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}``;

    const response = await fetch(URL); // wait to get data
    const data = await response.json();
    setSelectedPokemon(data);
  }

  return (
    <div>
      {/* if selectedPokemon isn't undefined */}
      {selectedPokemon && (
        <div>
          <h4>{selectedPokemon.species.name}</h4>

          <PokemonType type={selectedPokemon.types[0].type.name} />
        </div>
      )}
      <div>
        <p>Select your pokemon!</p>
        <button onClick={() => getPokemonInfo("Squirtle")}>Squirtle</button>
        <button onClick={() => getPokemonInfo("Bulbasaur")}>Bulbasaur</button>
        <button onClick={() => getPokemonInfo("Charmander")}>Charmander</button>
      </div>
    </div>

  );
}
