import { getLikes } from './APIlikes.js';

const updateLike = async (id) => {
  const storeLikes = await getLikes();
  let results = 0;
  storeLikes.forEach((x) => {
    if (x.item_id.toString() === id.toString()) {
      results = x.likes;
    }
  });

  return results;
};

const likeCount = async (pokeId, containerI) => {
  const likes = await updateLike(pokeId);
  containerI.innerHTML = `${likes}`;
};

export default likeCount;