const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();
  return data;
};

// fetchPokemon("25");

const Pokemon = (pokemon) => {
  const data = fetchPokemon(pokemon);

  console.log(data)
}

renderPokemon
