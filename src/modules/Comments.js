const endpoint= `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`
const apiKey = 'G6mOb6hFfUwlZAc1oOU5'

export default class Comment {
  static getComments = async (id) => {
    const result = await fetch(`${endpoint}${apiKey}/comments`).then((data) => data.json());
    return result;
  }
  static postComments = async (data) => {
    const result = await fetch(`${endpoint}${apiKey}/comments`, {
      method: 'POST',
      type: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
    return result;
  }
}