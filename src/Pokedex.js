import React, {useState} from "react";
import { PokemonType } from "./PokemonType";

export function Pokedex() {
  const pokemon = {
    //object of pokemon
    Squirtle: { type: "water" },
    Bulbasaur: { type: "grass" },
    Charmander: { type: "fire" }
  };

  const [selectedPokemon, setSelectedPokemon] = useState("Bulbasaur");

  return (
    <div>
      <div>
        <h4>{selectedPokemon}</h4>

        <PokemonType type={pokemon[selectedPokemon].type} />
      </div>

      <div>
        <p>Select your pokemon!</p>
        <button onClick={() => setSelectedPokemon("Squirtle")}>Squirtle</button>
        <button onClick={() => setSelectedPokemon("Bulbasaur")}>Bulbasaur</button>
        <button onClick={() => setSelectedPokemon("Charmander")}>Charmander</button>
      </div>
    </div>
    
  );
}

