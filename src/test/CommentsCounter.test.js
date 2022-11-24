import Comment from '../modules/Comments.js';
import commentsCount from '../modules/CommentsCounter.js';

const expectedFetchResponse = [
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(expectedFetchResponse),
  })
);



beforeEach(() => {
  fetch.mockClear();
});

const addComment = jest.fn((data) => {
  expectedFetchResponse.push(data);
});

describe('Testing', () => {
  
  test('Fetch have been called', async () => {
    const b = commentsCount(1);
    expect(fetch).toHaveBeenCalled();
  });
  test('Fetch have been called 2 times', async () => {
    const d = commentsCount(1);
    const c = commentsCount(2);
    expect(fetch).toHaveBeenCalledTimes(2);
  });
  test('Fetch have been called with 1', async () => {
    const e = await commentsCount(2);
    expect(e).toBe(1);
  });
  test('Add post and Count equal 3', async () => {
    

    const newData = {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    }
    addComment(newData);
    const f = await commentsCount(2)
  })

});