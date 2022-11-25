import commentsCount from '../modules/CommentsCounter.js';

let expectedFetchResponse = [
];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(expectedFetchResponse),
}));

beforeEach(() => {
  fetch.mockClear();
  expectedFetchResponse = [];
});

const addComment = jest.fn((data) => {
  expectedFetchResponse.push(data);
});

const newData = {
  comment: 'Great content!',
  creation_date: '2021-02-10',
  username: 'Jane',
};

describe('Testing', () => {
  test('Fetch have been called and result count equal 0', async () => {
    const b = await commentsCount(1);
    expect(fetch).toHaveBeenCalled();
    expect(b).toBe(0);
  });
  test('Comment Count first time equal 0', async () => {
    const e = await commentsCount(2);
    expect(e).toBe(0);
  });
  test('Add post and Count equal 1', async () => {
    addComment(newData);
    const f = await commentsCount(2);
    expect(f).toBe(1);
  });
  test('Add 5 comments and Count response equal 5', async () => {
    const totalCount = 5;
    for (let i = 1; i <= totalCount; i += 1) {
      addComment(newData);
    }
    const result = await commentsCount(2);
    expect(result).toBe(5);
  });
});
