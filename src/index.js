import './styles.css'
import Pokemon from './modules/Pokemon'
import Comment from './modules/Comments';
import { show, spinner } from './modules/Functions'

const closeButton = document.querySelector('.button-close');
const modal = document.querySelector('.modal-background');
const random = document.querySelector('#random');
const form = document.querySelector('.modal-form-comment');

closeButton.addEventListener('click', () => {
  modal.classList.add('display-none');
});

random.addEventListener('click', () => {
  spinner(true)
  const randomNumber = Math.ceil(Math.random() * 1153) + 1;
  Pokemon.getPokemon(randomNumber).then(
    result => show(result)
  )
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {name, comment, item_id} = e.target;
  const newData = {
    item_id: item_id.value,
    username: name.value,
    comment: comment.value
  }
  name.value='';
  comment.value='';
  item_id.value='';
  Comment.postComments(newData)
  .then(result=>{
    result.status===201
    ?
    Pokemon.getPokemon(result.item_id).then(
      result => show(result)
    ).then({
      
    })
    :
      console.log('ERROR')
  });
})