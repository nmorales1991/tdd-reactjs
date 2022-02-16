const testPromise = (x) => new Promise((resolve, reject) => {
  if (x === 1) reject(new Error('reject promise'));

  setTimeout(() => {
    resolve('resolve promise');
  }, 1000);
});

describe('async test', () => {
  test('test async function', async () => {
    const result = await testPromise(2);
    expect(result).toBe('resolve promise');
  });

  test('resolve async function', async () => { // usando método resolves
    await expect(testPromise(2)).resolves.toBe('resolve promise');
  });

  test('reject async function', async () => { // usando método rejects y to Throw para resolver el throw error
    await expect(testPromise(1)).rejects.toThrow('reject promise');
  });
});
