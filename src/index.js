import './styles.css'
import Pokemon from './modules/Pokemon'
import { render, spinner } from './modules/Functions'

const closeButton = document.querySelector('.button-close');
const modal = document.querySelector('.modal-background');
const random = document.querySelector('#random');

closeButton.addEventListener('click', () => {
  modal.classList.add('display-none');
});

random.addEventListener('click', () => {
  spinner(true)
  const randomNumber = Math.ceil(Math.random() * 1153) + 1;
  Pokemon.getPokemon(randomNumber).then(
    result => render(result)
  )

})