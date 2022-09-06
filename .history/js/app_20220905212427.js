const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = await APIResponse.json();
  return data;
};

fetchPokemon("25");
