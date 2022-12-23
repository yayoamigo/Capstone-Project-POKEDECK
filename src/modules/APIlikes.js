const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiKey = 'G6mOb6hFfUwlZAc1oOU5';

export const getLikes = async () => {
  try {
    const response = await fetch(`${endpoint}${apiKey}/likes`);
    const likeData = await response.json();
    return likeData;
  } catch (e) {
    return null;
  }
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