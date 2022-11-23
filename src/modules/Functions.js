const titleNode = document.querySelector('.modal-title');
const imageNode = document.querySelector('.modal-image');
const modalDataList = document.querySelector('.modal-data-list');
const modalStatsList = document.querySelector('.modal-stats-list');
const imageEndpoint = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
const spinnerNode = document.querySelector('.wrapper');
const modal = document.querySelector('.modal-background');

const render = (data) => {
  const {id, name, sprites, stats, types} = data
  titleNode.textContent = name.toUpperCase();
  imageNode.src = `${imageEndpoint}${id}.png`
  modalStatsList.innerHTML='';
  stats.forEach((stat)=>{
    const list = document.createElement('li')
    list.innerHTML=`<li class="modal-stats-item"><p class="modal-stat-name">${stat.stat.name}</p><p class="modal-stat-number">${stat.base_stat}</p></li>`
    modalStatsList.appendChild(list);
  });
  modalDataList.innerHTML='';
  types.forEach((type) => {
    const list = document.createElement('li');
    list.innerHTML=`<li class="modal-data-item ${type.type.name}">${type.type.name}</li>`;
    modalDataList.appendChild(list);
  });
  spinner(false)
  modal.classList.remove('display-none')
  
  console.log('DATA RECEIVED', data);
}

const spinner = (state) => {
  if(state){
    spinnerNode.classList.remove('display-none');
  }else{
    spinnerNode.classList.add('display-none');
  }
}

export { render, spinner };