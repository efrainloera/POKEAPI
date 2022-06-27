const pokeContainer = document.querySelector("#container");
const numOfPokemon = 12;

function createPokeCard(pokemon) {
  const pokeCard = document.createElement("section");
  pokeCard.classList.add("pokemon");
  pokeContainer.append(pokeCard);
  pokeCard.innerHTML = `
    <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}"
    alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}
    <h3>
   
    `;
}
async function getPokemonData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = await axios.get(url);
  console.log(pokemonData);
  console.log(pokemonData.data.sprites.front_shiny);
  console.log(pokemonData.data.name);
  createPokeCard(pokemonData);
}


async function getPokemon() {
  for (i = 1; i <= numOfPokemon; i++) {
    console.log(i);
    await getPokemonData(i);
  }
}
getPokemon();