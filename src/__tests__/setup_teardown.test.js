describe('setup and teardown', () => {
  beforeEach(() => {
    console.log('before each');
  });
  afterEach(() => {
    console.log('after each');
  });
  beforeAll(() => {
    console.log('before all');
  });
  afterAll(() => {
    console.log('after all');
  });

  test('test 1', () => {
    console.log('test 1');
    expect(true).toBeTruthy();
  });

  test.only('test 2', () => {
    console.log('test 2');
    expect(false).toBeFalsy();
  });
});
