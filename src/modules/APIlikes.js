const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiKey = process.env.COMMENTS_KEY;

export const getLikes = async () => {
  const response = await fetch(`${endpoint}${apiKey}/likes`);
  const likeData = await response.json();
  return likeData;
};

export const postLikes = async (id) => {
  const data = { item_id: id };
  const response = await fetch(`${endpoint}${apiKey}/likes`, {
    method: 'POST',
    type: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};