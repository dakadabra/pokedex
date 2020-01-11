import React from "react";
import { PokemonType } from "./PokemonType";

export function Pokedex() {
  const pokemon = {
    //Object
    Squirtle: { type: "water" },
    Bulbasaur: { type: "grass" },
    Charmander: { type: "fire" }
  };

  return (
    <div>
      <h4>Squirtle</h4>

      <PokemonType type={"water"} />
    </div>
  );
}
