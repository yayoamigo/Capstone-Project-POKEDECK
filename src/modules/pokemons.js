function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
 
const renderPokemons = (pokemon, category) => {
  const types = pokemon.types[0].type.name;
  let pokemonContainer;
  if (category === undefined) {
    pokemonContainer = document.querySelector('.pokemon-container');
  } else {
    pokemonContainer = document.querySelector('.pokemon-container-group');
  }
 
  if (category === undefined || category === types) {
    const card = document.createElement('div');
    card.classList.add('pokemonBlock');
 
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gifContainer');
 
    const gif = document.createElement('img');
    gif.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;
    gif.classList.add(`${types}`);
    gifContainer.appendChild(gif);
 
    const number = document.createElement('p');
    number.textContent = `#${pokemon.id}`;
 
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;
 
    const TYPE = document.createElement('p');
    TYPE.classList.add('TYPE');
    TYPE.textContent = types.toUpperCase();
 
    card.appendChild(gifContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(TYPE);
 
    pokemonContainer.appendChild(card);
  }
};
//Fetch function
const fetchPokemons = async (id, category) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  renderPokemons(data, category);
};
 
const loopPokemons = (number, category) => {
  const pokemonContainerGroup = document.querySelector('.pokemon-container-group');
  removeChildNodes(pokemonContainerGroup);
  for (let i = 1; i <= number; i += 1) {
    fetchPokemons(i, category);
  }
};
 
export default loopPokemons;
