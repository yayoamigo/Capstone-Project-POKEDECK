import './styles.css'
import {  loopPokemons } from './modules/pokemons';
import { loopFirePokemons } from './categories/fire';
import { loopWaterPokemons } from './categories/water';

const pokebtn = document.getElementById('poke');
const catebtn = document.getElementById('catego');
const home = document.querySelector('.home');
const catego = document.querySelector('.categories');
const activebtn = document.querySelectorAll('.activebtn');
const parentDiv = document.querySelector('.pokemon-container');
const electric = document.querySelectorAll('.electric');
const normal = document.querySelectorAll('.normal');
const fire = document.querySelectorAll('.fire');
const water = document.querySelectorAll('.water');
const ice = document.querySelectorAll('.ice');
const rock = document.querySelectorAll('.rock');
const flying = document.querySelectorAll('.flying');
const grass = document.querySelectorAll('.grass');
const ghost = document.querySelectorAll('.ghost');
const bug = document.querySelectorAll('.bug');
const poison = document.querySelectorAll('.poison');
const ground = document.querySelectorAll('.ground');
const fighting = document.querySelectorAll('.fighting');
const dragon = document.querySelectorAll('.dragon');
const steel= document.querySelectorAll('.steel');



 

//Toogle pages --start--
const addDisplayPoke = () => {
 home.classList.replace('none', 'active');
 catego.classList.replace('active', 'none');
 }
 
 const addDisplayBtn = () => {
  home.classList.replace('active', 'none');
 catego.classList.replace('none', 'active');
 }

pokebtn.addEventListener('click', addDisplayPoke);
catebtn.addEventListener('click', addDisplayBtn);

//Toogle pages --end--

 const firebtn = document.getElementById('Fire');
 firebtn.addEventListener('click', function(){
  loopFirePokemons(200);
})
 const waterbtn = document.getElementById('Water');
 waterbtn.addEventListener('click', function(){
  loopWaterPokemons(200);
})



loopPokemons(180)
