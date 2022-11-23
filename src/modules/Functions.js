import Comment from "./Comments";

const titleNode = document.querySelector('.modal-title');
const imageNode = document.querySelector('.modal-image');
const modalDataList = document.querySelector('.modal-data-list');
const modalStatsList = document.querySelector('.modal-stats-list');
const imageEndpoint = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
const spinnerNode = document.querySelector('.wrapper');
const modal = document.querySelector('.modal-background');
const count = document.querySelector('.comments-count');
const commentsList = document.querySelector('.modal-comments-list');
const itemIdNode = document.querySelector('#item_id')
const show = (data) => {
  const {id} = data;
  const res = Comment.getComments(id)
  .then(result=>render({...data,result}));
}

const render = (data) => {
  const {id, name, sprites, stats, types, result} = data;
  const comments= result.error? []:result;
  itemIdNode.value=id;
  count.textContent=comments.length;
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
  commentsList.innerHTML='';
  if(comments.length > 0) {
    comments.forEach((item) => {
      const { comment, creation_date, username} = item
      const list = document.createElement('li')
      list.innerHTML=`<li class="modal-comments-item"><p class="comment-date">${creation_date}</p><p class="comment-text-container"><span class="comment-name">${username}</span>: <span class="comment-text">${comment}</span></p></li>`
      commentsList.appendChild(list);
    })
  } else {
    const list = document.createElement('li')
      list.innerHTML=`<li class="modal-comments-item"><p class="comment-text-container"><span class="comment-text">No comments...</span></p></li>`
      commentsList.appendChild(list);
  }
  spinner(false)
  modal.classList.remove('display-none')
  }

const spinner = (state) => {
  if(state){
    spinnerNode.classList.remove('display-none');
  }else{
    spinnerNode.classList.add('display-none');
  }
}

export { show, render, spinner };