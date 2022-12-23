const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiKey = 'G6mOb6hFfUwlZAc1oOU5';

export default class Comment {
  static getComments = async (id) => {
    const URL = `${endpoint}${apiKey}/comments?item_id=${id}`;
    try {
      const result = await fetch(URL).then((data) => data.json());
      if (result.error) {
        return [];
      }
      return result;
    } catch (error) {
      return error;
    }
  }

  static postComments = async (data) => {
    const { item_id: itemId } = data;
    data.item_id = itemId;
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
        item_id: itemId,
      };
      return res;
    });
    return result;
  }
}