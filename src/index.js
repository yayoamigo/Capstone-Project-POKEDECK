import './styles.css';
import loopPokemons from './modules/pokemons.js';
import loopFirePokemons from './modules/categories/fire.js';
import loopWaterPokemons from './modules/categories/water.js';
import loopFlyingPokemons from './modules/categories/flying.js';
import loopBugsPokemons from './modules/categories/bugs.js';
import loopDragonPokemons from './modules/categories/dragon.js';
import loopElectricPokemons from './modules/categories/electric.js';
import loopGhostPokemons from './modules/categories/ghost.js';
import loopGrassPokemons from './modules/categories/grass.js';
import loopGroundPokemons from './modules/categories/ground.js';
import loopIcePokemons from './modules/categories/ice.js';
import loopNormalPokemons from './modules/categories/normal.js';
import loopPoisonPokemons from './modules/categories/poison.js';
import loopPsychicPokemons from './modules/categories/psychic.js';
import loopRockPokemons from './modules/categories/rock.js';
import Pokemon from './modules/Pokemon.js';
import Comment from './modules/Comments.js';
import { show, spinner } from './modules/Functions.js';

const closeButton = document.querySelector('.button-close');
const modal = document.querySelector('.modal-background');
const random = document.querySelector('#random');
const form = document.querySelector('.modal-form-comment');
const pokebtn = document.getElementById('poke');
const catebtn = document.getElementById('catego');
const home = document.querySelector('.home');
const catego = document.querySelector('.categories');

// Toogle pages --start--
const addDisplayPoke = () => {
  home.classList.replace('none', 'active');
  catego.classList.replace('active', 'none');
};

const addDisplayBtn = () => {
  home.classList.replace('active', 'none');
  catego.classList.replace('none', 'active');
};

pokebtn.addEventListener('click', addDisplayPoke);
catebtn.addEventListener('click', addDisplayBtn);

// Toogle pages --end--

const fireBtn = document.getElementById('Fire');
fireBtn.addEventListener('click', () => {
  loopFirePokemons(300);
});

const waterBtn = document.getElementById('Water');
waterBtn.addEventListener('click', () => {
  loopWaterPokemons(300);
});

const poisonBtn = document.getElementById('Poison');
poisonBtn.addEventListener('click', () => {
  loopPoisonPokemons(300);
});

const groundBtn = document.getElementById('Ground');
groundBtn.addEventListener('click', () => {
  loopGroundPokemons(300);
});

const flyingdBtn = document.getElementById('Flying');
flyingdBtn.addEventListener('click', () => {
  loopFlyingPokemons(300);
});

const ghostBtn = document.getElementById('Ghost');
ghostBtn.addEventListener('click', () => {
  loopGhostPokemons(300);
});

const normalBtn = document.getElementById('Normal');
normalBtn.addEventListener('click', () => {
  loopNormalPokemons(200);
});

const bugBtn = document.getElementById('Bugs');
bugBtn.addEventListener('click', () => {
  loopBugsPokemons(300);
});

const psychicBtn = document.getElementById('Psychic');
psychicBtn.addEventListener('click', () => {
  loopPsychicPokemons(300);
});

const dragonBtn = document.getElementById('Dragon');
dragonBtn.addEventListener('click', () => {
  loopDragonPokemons(300);
});

const electricBtn = document.getElementById('Electric');
electricBtn.addEventListener('click', () => {
  loopElectricPokemons(300);
});

const grassBtn = document.getElementById('Grass');
grassBtn.addEventListener('click', () => {
  loopGrassPokemons(300);
});

const iceBtn = document.getElementById('Ice');
iceBtn.addEventListener('click', () => {
  loopIcePokemons(300);
});

const rockBtn = document.getElementById('Rock');
rockBtn.addEventListener('click', () => {
  loopRockPokemons(300);
});

loopPokemons(200);
closeButton.addEventListener('click', () => {
  modal.classList.add('display-none');
});

random.addEventListener('click', () => {
  spinner(true);
  const randomNumber = Math.ceil(Math.random() * 1153) + 1;
  Pokemon.getPokemon(randomNumber).then(
    (result) => show(result),
  );
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, comment, itemId } = e.target;
  const newData = {
    item_id: itemId.value,
    username: name.value,
    comment: comment.value,
  };
  name.value = '';
  comment.value = '';
  itemId.value = '';
  Comment.postComments(newData)
    .then((result) => {
      if (result.status === 201) {
        Pokemon.getPokemon(result.item_id).then(
          (result) => show(result),
        ).then({

        });
      } else {
        throw new Error('Error creating post');
      }
    });
});