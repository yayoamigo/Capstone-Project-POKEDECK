import './styles.css';
import loopPokemons from './modules/pokemons.js';
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

// Toogle pages --end--

loopPokemons(200);
categoryBtn.forEach((name) => {
  name.addEventListener('click', () => {
    loopPokemons(300, name.id.toLowerCase());
  });
});

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
