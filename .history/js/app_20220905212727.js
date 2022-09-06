const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();
  return data;
};


const Pokemon = as (pokemon) => {
  const data = fetchPokemon(pokemon);

  console.log(data)
}

renderPokemon('25')
