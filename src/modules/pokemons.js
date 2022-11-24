import { postLikes } from './APIlikes.js';
import likeCount from './counters.js';
import { show, spinner } from './Functions.js';
import Pokemon from './Pokemon.js';

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

    const countsContainer = document.createElement('div');
    countsContainer.classList.add('countsContainer');
    const likeCont = document.createElement('div');
    likeCont.classList.add('likeDiv');
    const heart = document.createElement('i');
    heart.classList.add('fa-regular');
    heart.classList.add('fa-heart');
    heart.classList.add('likeBtn');
    heart.id = `btn-${pokemon.id}`;
    const num = document.createElement('span');
    num.classList.add('numLikes');
    num.textContent = '0';
    const comment = document.createElement('button');
    comment.classList.add('commentBtn');
    comment.id = `commentBtn-${pokemon.id}`;
    comment.textContent = 'comment';
    countsContainer.appendChild(comment);
    likeCont.appendChild(num);
    likeCont.appendChild(heart);
    countsContainer.appendChild(likeCont);

    likeCount(pokemon.id, num);

    card.appendChild(gifContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(TYPE);
    card.append(countsContainer);

    pokemonContainer.appendChild(card);
    const likeBtn = pokemonContainer.querySelector(`#btn-${pokemon.id}`);
    likeBtn.addEventListener('click', (e) => {
      const id = e.target.id.substring(e.target.id.indexOf('-') + 1, e.target.id.length);
      postLikes(id);
      likeCount(id, e.target.previousSibling);
    });
    const commentBtn = pokemonContainer.querySelector(`#commentBtn-${pokemon.id}`);
    commentBtn.addEventListener('click', (e) => {
      const id = e.target.id.substring(e.target.id.indexOf('-') + 1, e.target.id.length);
      spinner(true);
      Pokemon.getPokemon(id).then(
        (result) => show(result),
      );
    });
  }
};
// Fetch function
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
