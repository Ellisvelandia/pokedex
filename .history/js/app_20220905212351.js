const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = await APIResponse
  console.log(APIResponse);
};

fetchPokemon('25');
