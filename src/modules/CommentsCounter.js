import Comment from './Comments.js';

const commentsCount = async (id) => {
  const counter = await Comment.getComments(id)
    .then((result) => result.length)
    .catch((err) => err);
  return counter;
};

export default commentsCount;