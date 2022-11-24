import './styles.css';
import loopPokemons from './modules/pokemons.js';
import Pokemon from './modules/Pokemon.js';
import Comment from './modules/Comments.js';
import { show } from './modules/Functions.js';

const closeButton = document.querySelector('.button-close');
const modal = document.querySelector('.modal-background');
const form = document.querySelector('.modal-form-comment');
const pokebtn = document.getElementById('poke');
const catebtn = document.getElementById('catego');
const home = document.querySelector('.home');
const catego = document.querySelector('.categories');
const categoryBtn = document.querySelectorAll('.activebtn');

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

// Toogle page --end--

loopPokemons(200);
categoryBtn.forEach((name) => {
  name.addEventListener('click', () => {
    loopPokemons(300, name.id.toLowerCase());
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.add('display-none');
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

window.addEventListener('click', (e) => {
  if (e.target.id === 'modal') {
    modal.classList.add('display-none');
  }
});