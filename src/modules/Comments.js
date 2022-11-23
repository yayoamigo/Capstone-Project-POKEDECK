const endpoint= `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`
const apiKey = 'G6mOb6hFfUwlZAc1oOU5'

export default class Comment {
  static getComments = async (id) => {
    const URL= `${endpoint}${apiKey}/comments?item_id=${id}`;
    const result = await fetch(URL)
    .then((data) => data.json());
    return result;
  }
  static postComments = async (data) => {
    const {item_id}=data;
    const result = await fetch(`${endpoint}${apiKey}/comments`, {
      method: 'POST',
      type: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => {
      const res = {
        status: data.status,
        item_id: item_id,
      }
      return res
    });
    return result;
  }
}