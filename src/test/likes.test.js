import { updateLike } from '../modules/counters.js';
import { getLikes } from '../modules/APIlikes.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{ likes: 48, item_id: 1 }, { item_id: 2, likes: 7 }]),
}));

afterEach(() => {
  fetch.mockClear();
});

describe('Testing likes functions', () => {
  test('update likes 1', async () => {
    const x = await updateLike(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(x).toBe(48);
  });
  test('update likes 2', async () => {
    const x = await updateLike(2);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(x).toBe(7);
  });
  test('handles rejection', async () => {
    fetch.mockImplementationOnce(() => Promise.reject(new Error('API error')));
    const x = await getLikes();
    expect(x).toBe(null);
  });
});
