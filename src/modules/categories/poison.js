function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const renderSteelPokemons = (pokemon) => {
  const types = pokemon.types[0].type.name;
  if (types === 'poison') {
    const pokemonContainerGroup = document.querySelector('.pokemon-container-group');
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

    pokemonContainerGroup.appendChild(card);
  }
};

const fetchSteelPokemons = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  renderSteelPokemons(data);
};

const loopPoisonPokemons = (number) => {
  const pokemonContainerGroup = document.querySelector('.pokemon-container-group');
  removeChildNodes(pokemonContainerGroup);
  for (let i = 1; i <= number; i += 1) {
    fetchSteelPokemons(i);
  }
};

export default loopPoisonPokemons;