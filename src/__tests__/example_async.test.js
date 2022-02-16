const functionPromise = (x) => new Promise((resolve, reject) => {
  if (x === 1) reject(new Error('reject promise'));

  setTimeout(() => {
    resolve('resolve promise');
  }, 1000);
});

describe('async', () => {
  test('async await promise', async () => { // forma normal
    const data = await functionPromise(2);
    expect(data).toBe('resolve promise');
  });

  test('the data is peanut butter', async () => { // usando método resolves
    await expect(functionPromise(2)).resolves.toBe('resolve promise');
  });

  test('the fetch fails with an error', async () => { // usando método rejects y to Throw para resolver el throw error
    await expect(functionPromise(1)).rejects.toThrow('reject promise');
  });
});
